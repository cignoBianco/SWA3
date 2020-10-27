import React, { useEffect } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadSavedState } from './actions';
import {  Layout, Breadcrumb, Typography, Tag } from 'antd'
import CustomSider from './components/core/CustomSider'
import MainLayout from './components/MainLayout'
import Achievement from './components/user/Achievement'
import Team from './components/statics/Team'
import Signup from './components/user/Signup.js'
import E403 from './components/core/E403'
import E404 from './components/core/E404'
import E500 from './components/core/E500'
import Contacts from './components/statics/Contacts'
import Player from './components/Player'
import { useTranslation } from "react-i18next";
import './App.css'


const { Header: H, Footer, Content } = Layout;

const App = () => {

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
  });

  return (
    <div className="App">
      <Layout style={{ maxHeight: '100vh', minHeight: '100vh', overflowY: 'hidden' }}>
       <CustomSider/>
       <Layout className="site-layout">
          <H className="site-layout-background" style={{ padding: 0 }} />
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("ru")}>RU</button>
          <hr />
          <div><h1>{t("title")}</h1></div>
          <div>{t("description.part1")}</div>
          <div>{t("description.part2")}</div>
        <BrowserRouter>
          <Content style={{ margin: '0 16px', overflowY: 'scroll' }}>
            {!user ? (<>
            <Switch>
              <Route exact path="/" component={E403} />
              <Route exact path="/achievement" component={E403} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/contact" component={Contacts} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/player" component={Player} />
              <Route exact path="/ooops" component={E500} />
              <Route path="*" component={E404} />
            </Switch>
            </>) : 
            <Switch>
              <Route exact path="/" exact component={MainLayout} />
              <Route exact path="/achievement" component={Achievement} />
              <Route exact path="/contact" component={Contacts} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/player" component={Player} />
              <Route exact path="/ooops" component={E500} />
              <Route path="*" component={E404} />
            </Switch>
        }
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

