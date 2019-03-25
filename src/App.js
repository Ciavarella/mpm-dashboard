import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Start from './Views/Start'
import AuthRedirect from './Views/AuthRedirect'
import AuthLogin from './Views/AuthLogin'
import SignedIn from './Views/SignedIn.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/auth/redirect" component={AuthRedirect} />
          <Route path="/auth/login" component={AuthLogin} />
          <Route path="/user" component={SignedIn} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
