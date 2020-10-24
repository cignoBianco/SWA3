import React, { useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadSavedState } from './actions';
import {  Layout, Breadcrumb, Typography, Tag } from 'antd'
import CustomSider from './components/core/CustomSider'
import MainLayout from './components/MainLayout'
import Achievement from './components/user/Achievement'
import './App.css'
import { 
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
 } from '@ant-design/icons';

const { Header: H, Footer, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('storedState'));
    if (savedState) {
      dispatch(loadSavedState(savedState));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('storedState', JSON.stringify(lists));
  });

  return (
    <div className="App">
      <Layout style={{ maxHeight: '100vh', minHeight: '100vh', overflowY: 'hidden' }}>
       <CustomSider/>
       <Layout className="site-layout">
          <H className="site-layout-background" style={{ padding: 0 }} />
        <BrowserRouter>
          <Content style={{ margin: '0 16px', overflowY: 'scroll' }}>
            <Route path="/" exact component={MainLayout} />
            <Route path="/achievement" component={Achievement} />
          </Content> 
        </BrowserRouter>
         <Footer>
         <div>
            AntyCryptoniteToDo ©2020 Created by Cigno Bianco
          </div>
         <div>
            <Tag icon={<TwitterOutlined />} color="#55acee">
              Twitter
            </Tag>
            <Tag icon={<YoutubeOutlined />} color="#cd201f">
              Youtube
            </Tag>
            <Tag icon={<FacebookOutlined />} color="#3b5999">
              Facebook
            </Tag>
            <Tag icon={<LinkedinOutlined />} color="#55acee">
              LinkedIn
            </Tag>
          </div>
             </Footer>
        </Layout>
       
      </Layout>
    </div>
    
  );
};
 
export default App;

