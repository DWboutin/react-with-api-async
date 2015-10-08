import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/components/App.react';
import Creatives from './src/components/Creatives.react';
import CreateForm from './src/components/CreateForm.react.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Creatives} />
    <Route path="/create" component={CreateForm}></Route>
  </Route>
);