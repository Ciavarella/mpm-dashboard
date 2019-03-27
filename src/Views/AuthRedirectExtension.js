import React, { useRef } from 'react'
import spotifyIcon from '../Assets/spotifyIcon.png'
import '../Styles/AuthRedirect.css'

/**
 * Takes the url and slices it to get tokens.
 */
const AuthRedirectExtension = () => {
  const textInputRef = useRef(null)
  const params = window.location.search
  const token = params.slice(14)

  /**
   * Copy the token to clipboard.
   */
  const copyToken = e => {
    textInputRef.current.select()
    document.execCommand('copy')
    e.target.focus()
  }

  return (
    <div className="mpm-helper-container">
      <img className="spotifyLogo" alt="SpotifyLogo" src={spotifyIcon} />
      {params && token && (
        <div className="tokenContainer">
          <input className="token" ref={textInputRef} value={token} readOnly />
          <button className="btn" onClick={copyToken}>
            Copy to clipboard
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthRedirectExtension
