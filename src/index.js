import React, {Suspense} from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './i18n.js';

const store = createStore(
  rootReducer
);

render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);