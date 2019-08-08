/*
 * @Author: chenjiao25322
 * @Date: 2019-08-08 17:07:08
 * @LastEditors: chenjiao25322
 * @LastEditTime: 2019-08-08 17:38:18
 * @Description: 描述信息
 */
import React from 'react';
import { Layout } from 'antd'

const { Header, Content, Sider, Footer } = Layout

function App() {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ background: "#fff" }}>header</Header>
      <Layout>
        <Sider style={{ background: "#fff" }}>right sidebar</Sider>
        <Content>main content</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default App;
