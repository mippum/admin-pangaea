import { Datagrid, EditButton, List, TextField } from "react-admin";

const AdminAccountList = () => {
  return (
    <List>
      <Datagrid rowClick={"toggleSelection"}>
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="role" />
        <TextField source="is_active" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default AdminAccountList;
