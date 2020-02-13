import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import React from "react";
import { IPropsMenuMobile } from "./MenuRight";
const MenuLeft: React.FC<IPropsMenuMobile> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </Menu>
  );
};
export default MenuLeft;
