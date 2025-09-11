import { Menu, MenuItemLink } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";

const CustomMenu = () => (
  <Menu>
    <Menu.ResourceItem name="admin-accounts" />
    <MenuItemLink
      to="/custom-page"
      primaryText="Custom Page"
      leftIcon={<LabelIcon />}
    />
  </Menu>
);

export default CustomMenu;
