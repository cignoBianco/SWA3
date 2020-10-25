import React, { useEffect } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadSavedState } from './actions';
import {  Layout, Breadcrumb, Typography, Tag } from 'antd'
import CustomSider from './components/core/CustomSider'
import MainLayout from './components/MainLayout'
import Achievement from './components/user/Achievement'
import Team from './components/statics/Team'
import Signup from './components/user/Signup.js'
import Contacts from './components/statics/Contacts'
import './App.css'


const { Header: H, Footer, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const lists = useSelector(state => state.lists);
  let user = JSON.parse(localStorage.getItem('user'));
  const userId = 9;


  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('storedState'));
    user = JSON.parse(localStorage.getItem('user'));
    if (savedState) {
      dispatch(loadSavedState(savedState));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('storedState', JSON.stringify(lists));
   /// localStorage.setItem('user', JSON.stringify(userId));
  });

  return (
    <div className="App">
      <Layout style={{ maxHeight: '100vh', minHeight: '100vh', overflowY: 'hidden' }}>
       <CustomSider/>
       <Layout className="site-layout">
          <H className="site-layout-background" style={{ padding: 0 }} />
        <BrowserRouter>
          <Content style={{ margin: '0 16px', overflowY: 'scroll' }}>
            {!user && <Route path="/" component={Signup} /> }
        
            <Route path="/" exact component={MainLayout} />
            <Route path="/achievement" component={Achievement} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contacts} />
            
          </Content> 
        </BrowserRouter>
         <Footer>
         <div>
            AntyCryptoniteToDo ©2020 Created by Cigno Bianco
          </div>
             </Footer>
        </Layout>
       
      </Layout>
    </div>
    
  );
};
 
export default App;

