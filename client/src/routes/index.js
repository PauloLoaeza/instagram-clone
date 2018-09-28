import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Register from './register';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
