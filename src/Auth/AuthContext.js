import React from 'react'
import api from '../Utils/api'

export const AuthContext = React.createContext({})
class AuthProvider extends React.Component {
  state = {
    isAuth: false,
    user: null,
    signout: () => {
      this.setState({ isAuth: false, user: null })
      localStorage.removeItem('token')
    },
    signin: async token => {
      if (token) {
        const path = '/user/me'
        const args = {
          method: 'GET',
          headers: {
            authorization: `Bearer ${token}`
          }
        }
        const res = await api(path, args)
        const data = await res.json()
        this.setState({
          user: data,
          isAuth: true
        })
      }

      localStorage.setItem('token', token)
    }
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          user: this.state.user,
          signin: this.state.signin,
          signout: this.state.signout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
