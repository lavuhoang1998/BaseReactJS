import React, { useState } from 'react';
import './App.less';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ContainerOutlined,
  FileTextOutlined,
  ZhihuOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import CustomApp from '../src/CustomApp/index';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="main-container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {collapsed ? (
            <img src="https://d2vukpjvy8cot9.cloudfront.net/_nuxt/img/logo-icon-white.c9bb2c7.svg" alt='logo_less'/>
          ) : (
            <img src="https://d2vukpjvy8cot9.cloudfront.net/_nuxt/img/logo-nav-title-white.4467f04.svg" alt='logo_full'/>
          )}
          
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <ContainerOutlined />,
              label: <Link to="ekyc-documents">EKYC Documents</Link>,
            },
            {
              key: '2',
              icon: <FileTextOutlined />,
              label: <Link to="ocr">OCR</Link>,
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <Link to="face-detection">Face Detection</Link>,
            },
            {
              key: '4',
              icon: <ZhihuOutlined />,
              label: <Link to="ruby-swing">Ruby Swing</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content className="site-layout-background"><CustomApp/></Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Rikkeisoft ©2022 Created by HoangLV
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;