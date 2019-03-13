import App from './App';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default Root;
