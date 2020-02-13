import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import React from "react";

export interface IPropsMenuMobile {
  mode?:
    | "vertical"
    | "vertical-left"
    | "vertical-right"
    | "horizontal"
    | "inline";
}

const MenuRight: React.FC<IPropsMenuMobile> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <MenuItem>Item one</MenuItem>
      <MenuItem>Item two</MenuItem>
      <MenuItem>Item three</MenuItem>
    </Menu>
  );
};
export default MenuRight;
