import React from 'react'
import '../Styles/AuthLogin.css'
import '../Styles/AuthRedirect.css'
import '../index.css'
import spotifyIcon from '../Assets/spotifyIcon.png'

const AuthLogin = () => {
  return (
    <div className="mpm-helper-container">
      <div className="spotifyContainer">
        <img className="spotifyLogo" alt="SpotifyLogo" src={spotifyIcon} />
        <h2>Music Per Minute</h2>
        <a href="https://mpm-node-backend.herokuapp.com/auth/" className="btn">
          Login with Spotify
        </a>
      </div>
    </div>
  )
}

export default AuthLogin
