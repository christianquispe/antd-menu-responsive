import { Button, Col, Drawer, Row } from "antd";
import React, { useState } from "react";
import "./index.less";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
const NavBar: React.FC = (props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <div className="container">
      <Row className="NavBar--desktop">
        <Col span={12}>
          <MenuLeft mode="horizontal" />
        </Col>
        <Col span={12}>
          <MenuRight mode="horizontal" />
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Button
          className="Button--mobile"
          icon="bars"
          type="primary"
          onClick={showDrawer}
          size="large"
        ></Button>
      </Row>
      <Drawer
        className="NavBar--mobile"
        title="Explore my app"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <MenuLeft mode="vertical" />
        <MenuRight mode="vertical" />
      </Drawer>
    </div>
  );
};
export default NavBar;
