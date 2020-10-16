import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStoredState } from './actions/index'

import Header from './components/core/Header'
import Footer from './components/core/Footer'
import AllLists from './components/AllLists' // TODO: rename

import './App.css'

const App = () => {

  const dispatch = useDispatch()
  const lists = useSelector(state => state.lists)

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem('storedState'))
    if (storedState) dispatch(getStoredState(storedState))
  })

  useEffect(() => {
    localStorage.setItem('storedState', JSON.stringify(lists))
  })

  return (
    <div className="App">
      <Header />
        <AllLists />
      <Footer />
    </div>
  );
}

export default App
