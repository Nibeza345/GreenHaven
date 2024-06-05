import { Flex } from "antd";
import React from "react";
import ContentSidebar from "./ContentSiderbar";
import Activity from "./Activity";

const SideContent = () => {
  return (
  <Flex vertical gap='2.3rem' style={{width:300}}> 
  <ContentSidebar/>
  {/* <Activity/> */}
  </Flex>
  )
};

export default SideContent;
