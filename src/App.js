import React, { useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadSavedState } from './actions';
import {  Layout, Breadcrumb, Typography, } from 'antd'
import CustomSider from './components/core/CustomSider'
import MainLayout from './components/MainLayout'
import Achievement from './components/user/Achievement'
import './App.css'

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
      <Layout style={{ minHeight: '100vh' }}>
       <CustomSider/>
       <Layout className="site-layout">
          <H className="site-layout-background" style={{ padding: 0 }} />
        <BrowserRouter>
          <Content style={{ margin: '0 16px' }}>
            <Route path="/" exact component={MainLayout} />
            <Route path="/achievement" component={Achievement} />
          </Content> 
        </BrowserRouter>
         <Footer style={{ textAlign: 'center' }}>AntyCryptoniteToDo ©2020 Created by Cigno Bianco</Footer>
        </Layout>
       
      </Layout>
    </div>
    
  );
};
 
export default App;

