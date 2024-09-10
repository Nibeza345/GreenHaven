import React from "react";
import { Link } from 'react-router-dom';
import { Menu } from "antd";
import { FaLeaf } from "react-icons/fa";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="logo">
          <FaLeaf />
        </div>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CarryOutOutlined />}>
          <Link to="/Orders">My Orders</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<OrderedListOutlined />}>
          <Link to="/ToDo">ToDo</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ProfileOutlined />}>
          <Link to="/Profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <Link to="/Settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<LogoutOutlined />}>
          <Link to="/Home">Logout</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
