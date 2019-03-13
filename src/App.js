import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './Views/Start';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Start} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
