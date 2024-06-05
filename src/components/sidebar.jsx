import React from "react";
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
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <CarryOutOutlined />,
            label: "My Orders",
          },
          {
            key: "3",
            icon: <OrderedListOutlined />,
            label: "ToDo",
          },
          {
            key: "4",
            icon: <ProfileOutlined />,
            label: "Profile",
          },
          {
            key: "5",
            icon: <SettingOutlined />,
            label: "Settings",
          },
          {
            key: "6",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </>
  );
};

export default Sidebar;
