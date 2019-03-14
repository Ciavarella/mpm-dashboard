import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './Views/Start';
import AuthRedirect from './Views/AuthRedirect';
import AuthLogin from './Views/AuthLogin';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route exact path='/auth/redirect' component={AuthRedirect} />
          <Route exact path='/auth/login' component={AuthLogin} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
