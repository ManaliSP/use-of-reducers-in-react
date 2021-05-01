import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logger from 'redux-logger'

import { applyMiddleware, createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const myLogger = store => (next) => (action) => {
    // console.log('Middleware ran');
    return next(action);
};

const secondMiddleware = store => (next) => (action) => {
  // console.log(' second Middleware ran');
  return next(action);
};

const capAtTen = (store) => (next) => (action) => {
  if(store.getState() >=20)
  {
    return next({type: "DECREMENT" });
  }
  next(action);
};

const store = createStore(allReducers, applyMiddleware(myLogger, secondMiddleware,capAtTen,logger));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
