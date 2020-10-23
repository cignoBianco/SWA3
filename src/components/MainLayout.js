import React, { useState } from 'react'
import {  Layout, Breadcrumb, Typography } from 'antd';
import './layout.css'
import Header from './Header';
import AllLists from './AllLists';

const { Content, Footer } = Layout;

const MainLayout = () => {

    return (
      
        
          <>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Header />
              <AllLists />
            </div>
          </>
          
    );
  
}

export default MainLayout