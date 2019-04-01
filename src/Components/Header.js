import React from 'react'

const signin_uri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/dashboard'
    : 'https://mpm-node-backend.herokuapp.com/dashboard'

const Header = props => {
  return (
    <div className="header">
      <h3>Music Per Minute</h3>
      <p>About</p>
      {!props.username ? (
        <a href={signin_uri}>Sign in with Spotify</a>
      ) : (
        <p>{props.username}</p>
      )}
    </div>
  )
}

export default Header
