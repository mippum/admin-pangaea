import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import AdminAccountEdit from "./admin-accounts/AdminAccountEdit.tsx";
import AdminAccountList from "./admin-accounts/AdminAccountList.tsx";
import AdminAccountCreate from "./admin-accounts/AdminAccountCreate.tsx";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="admin-accounts"
      list={AdminAccountList}
      create={AdminAccountCreate}
      edit={AdminAccountEdit}
      options={{ meta: { prefix: "/admin-api/admin-auth" } }}
    />
  </Admin>
);

export default App;
