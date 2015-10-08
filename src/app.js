import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from '../routes';
import reducers from './reducers';

let store = createStore(reducers);

ReactDOM.render((
  <Provider store={store}>
    <Router history={createHistory()}>{routes}</Router>
  </Provider>
), document.getElementById( 'react-app' ));