import { fetchUtils, DataProvider } from "react-admin";

const apiUrl = "http://localhost:8000";

const pathMap: Record<
  string,
  Record<string, { method: string; path: string }>
> = {
  "admin-accounts": {
    getList: { method: "GET", path: "admin-api/admin-auth/admin-accounts" },
    getOne: { method: "GET", path: "admin-api/admin-auth/admin-account" },
    create: {
      method: "POST",
      path: "admin-api/admin-auth/admin-account/create",
    },
    update: { method: "PATCH", path: "admin-api/admin-auth/admin-account" },
    delete: {
      method: "DELETE",
      path: "admin-api/admin-auth/admin-account",
    },
  },
};

const fetchData = async (url: string, method: string, body?: any) => {
  const options: RequestInit = {
    method,
    headers: new Headers({ "Content-Type": "application/json" }),
  };
  if (body) options.body = JSON.stringify(body);
  const { json } = await httpClient(url, options);
  return json;
};

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  if (token) {
    options.headers.set("Authorization", `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
};

const dataProvider: DataProvider = {
  getList: async (resource, _params) => {
    const action = "getList";
    const map = pathMap[resource]?.[action];
    if (!map) throw new Error(`No pathMap entry for ${resource} / ${action}`);
    const url = `${apiUrl}/${map.path}`;
    const json = await fetchData(url, map.method);
    return { data: json.result.list, total: json.result.total_count };
  },
  getOne: async (resource, params) => {
    const action = "getOne";
    const map = pathMap[resource]?.[action];
    if (!map) throw new Error(`No pathMap entry for ${resource} / ${action}`);
    const url = `${apiUrl}/${map.path}/${params.id}`;
    const json = await fetchData(url, map.method);
    return { data: json.result };
  },
  create: async (resource, params) => {
    const action = "create";
    const map = pathMap[resource]?.[action];
    if (!map) throw new Error(`No pathMap entry for ${resource} / ${action}`);
    const url = `${apiUrl}/${map.path}`;
    const json = await fetchData(url, map.method, params.data);
    return { data: json.result };
  },
  update: async (resource, params) => {
    const action = "update";
    const map = pathMap[resource]?.[action];
    if (!map) throw new Error(`No pathMap entry for ${resource} / ${action}`);
    const url = `${apiUrl}/${map.path}/${params.id}`;
    delete params.data.id;
    const json = await fetchData(url, map.method, params.data);
    return { data: json.result };
  },
  delete: async (resource, params) => {
    const action = "delete";
    const map = pathMap[resource]?.[action];
    if (!map) throw new Error(`No pathMap entry for ${resource} / ${action}`);
    const url = `${apiUrl}/${map.path}/${params.id}`;
    const json = await fetchData(url, map.method);
    return { data: json.result };
  },
  deleteMany: async (resource, params) => {
    const action = "delete";
    const map = pathMap[resource]?.[action];
    if (!map) throw new Error(`No pathMap entry for ${resource} / ${action}`);

    for (const id of params.ids) {
      const url = `${apiUrl}/${map.path}/${id}`;
      await fetchData(url, map.method);
    }
    return { data: [] };
  },

  // 추가 구현 필요
  getMany: async (_resource, _params) => {
    return { data: [] };
  },
  getManyReference: async (_resource, _params) => {
    return { data: [], total: 0 };
  },
  updateMany: async (_resource, _params) => {
    return { data: [] };
  },
};

export default dataProvider;
