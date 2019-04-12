import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthContext'

const signin_uri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/dashboard'
    : 'https://mpm-node-backend.herokuapp.com/dashboard'

const Header = props => {
  const { signout } = useContext(AuthContext)
  const token = localStorage.getItem('token')

  const signOut = () => {
    signout(token)
    props.history.push('/')
  }

  return (
    <div className="header">
      <a href="/" className="title" onClick={signOut}>
        Music Per Minute
      </a>
      <p>About</p>
      {!props.username ? (
        <a className="link" href={signin_uri}>
          Sign in with Spotify
        </a>
      ) : (
        <a className="link" href="/dashboard">
          {props.username}
        </a>
      )}
      {!props.username ? (
        ''
      ) : (
        <a className="link" href="/settings">
          Settings
        </a>
      )}
      <p>
        <a
          href="#"
          className="link"
          onClick={() => {
            localStorage.setItem(
              'mode',
              (localStorage.getItem('mode') || 'dark') === 'dark'
                ? 'light'
                : 'dark'
            )
            localStorage.getItem('mode') === 'dark'
              ? document.querySelector('body').classList.add('dark')
              : document.querySelector('body').classList.remove('dark')
          }}
          title="Dark/light"
        >
          Dark/Light
        </a>
      </p>
    </div>
  )
}

export default Header
