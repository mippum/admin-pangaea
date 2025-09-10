// import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  useNotify,
  BooleanInput,
} from "react-admin";

const AdminAccountEdit = () => {
  const notify = useNotify();

  return (
    <Edit
      mutationOptions={{
        onSuccess: (_data) => {
          notify("User updated successfully!", { type: "success" });
        },
        onError: (_error) => {
          notify("Error updating user", { type: "error" });
        },
      }}
    >
      <SimpleForm>
        <TextInput source="username" />
        <TextInput source="password" type="password" />
        <BooleanInput source="is_active" />
      </SimpleForm>
    </Edit>
  );
};

export default AdminAccountEdit;
