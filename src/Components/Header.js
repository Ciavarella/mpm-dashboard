import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
  }

  return (
    <div className="header">
      <Link className="title" to="/" onClick={signOut}>
        Music Per Minute
      </Link>
      {!props.username ? (
        <a className="link" href={signin_uri}>
          Sign in with Spotify
        </a>
      ) : (
        <a className="link" href="/settings">
          Settings
        </a>
      )}
      {!props.username ? (
        ''
      ) : (
        <a className="link" href="/dashboard">
          Dashboard
        </a>
      )}
      {!props.username ? (
        ''
      ) : (
        <Link to="/" className="link" onClick={signOut}>
          Sign Out
        </Link>
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
