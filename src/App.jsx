import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import CustomHeader from "./components/Header";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import { Button, Flex, Layout } from "antd";
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons'
import './App.css'

const { Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar/>

        <Button 
        type="text" 
        icon={collapsed ?<MenuUnfoldOutlined/> :<MenuFoldOutlined/>} 
        onClick={()=> setCollapsed(!collapsed)}
        className="triger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader/>
        </Header>
        <Content className="content">
          <Flex gap="large">
          <MainContent/>
          <SideContent/>
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
