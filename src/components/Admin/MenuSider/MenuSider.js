import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/holidays"]}>
       <Menu.Item key="/holidays">
          <Link to="/holidays">
            <Icon type="calendar" />
            <span className="nac-text">Festivos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users">
            <Icon type="user" />
            <span className="nac-text">Usuarios</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
