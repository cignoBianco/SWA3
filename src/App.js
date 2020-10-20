import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSavedState } from './actions';

import Header from './components/Header';
import Footer from './components/core/Footer'
import AllLists from './components/AllLists';

import './App.css'

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
      <Header />
      <AllLists />
      <Footer/>
    </div>
  );
};
 
export default App;
