import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunkMiddleware } from './utils/thunkMiddleware';
import routes from '../routes';
import reducers from './reducers';

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);

ReactDOM.render((
  <Provider store={store}>
    <Router history={createHistory()}>{routes}</Router>
  </Provider>
), document.getElementById( 'react-app' ));