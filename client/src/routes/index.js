import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
import Login from './login';

import 'semantic-ui-css/semantic.min.css';
import '../assets/css/main.css';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Redirect from="/" to="/login" />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
