import { Create, SimpleForm, TextInput } from "react-admin";

const AdminAccountCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="username" />
        <TextInput source="password" type="password" />
        {/*<TextInput source="role" />*/}
      </SimpleForm>
    </Create>
  );
};

export default AdminAccountCreate;
