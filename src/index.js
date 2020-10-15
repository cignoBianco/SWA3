import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(Reducer)

//  </React.StrictMode>
render(
  
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
