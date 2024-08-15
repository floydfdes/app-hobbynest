import './index.scss';

import { applyMiddleware, compose, createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import App from './App';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
);
