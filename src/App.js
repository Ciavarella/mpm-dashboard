import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Start from './Views/Start'
import AuthRedirectExtension from './Views/AuthRedirectExtension'
import AuthRedirectApi from './Views/AuthRedirectApi'
import AuthLogin from './Views/AuthLogin'
import Dashboard from './Views/Dashboard/Dashboard'
import NotFound from './Views/NotFound.js'
import { AuthProvider } from './Auth/AuthContext'
import PrivateRoute from './Auth/PrivateRoute'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/auth" component={AuthRedirectApi} />
            <Route
              exact
              path="/auth/redirect"
              component={AuthRedirectExtension}
            />
            <Route exact path="/auth/login" component={AuthLogin} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    )
  }
}

export default App
