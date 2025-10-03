import { Admin, Resource, CustomRoutes } from "react-admin";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import AdminAccountEdit from "./admin-accounts/AdminAccountEdit.tsx";
import AdminAccountList from "./admin-accounts/AdminAccountList.tsx";
import AdminAccountCreate from "./admin-accounts/AdminAccountCreate.tsx";
import CustomPage from "./pages/CustomPage.tsx";
import { Route } from "react-router";
import { Layout } from "./Layout.tsx";
import { HashRouter } from "react-router-dom";

const App = () => (
  <HashRouter>
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={Layout}
    >
      <Resource
        name="admin-accounts"
        list={AdminAccountList}
        create={AdminAccountCreate}
        edit={AdminAccountEdit}
        options={{ meta: { prefix: "/admin-api/admin-auth" } }}
      />
      <CustomRoutes>
        <Route path="/custom-page" element={<CustomPage />} />
      </CustomRoutes>
    </Admin>
  </HashRouter>
);

export default App;
