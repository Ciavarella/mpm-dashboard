import React from 'react'

const signin_uri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/dashboard'
    : 'https://mpm-node-backend.herokuapp.com/dashboard'

const Header = props => {
  console.log('singin', signin_uri)

  return (
    <div className="header">
      <h3>Music Per Minute</h3>
      <p>About</p>
      {!props.username ? (
        <a className="link" href={signin_uri}>
          Sign in with Spotify
        </a>
      ) : (
        <p>{props.username}</p>
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
