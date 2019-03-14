import React, { useRef } from 'react';
import spotifyIcon from '../Assets/spotifyIcon.png';
import { getParams } from '../Utils/helpers';
import '../Styles/AuthRedirect.css';

const AuthRedirect = () => {
  const textInputRef = useRef(null);
  const params = getParams(window.location);

  const copyToken = e => {
    textInputRef.current.select();
    document.execCommand('copy');
    e.target.focus();
  };

  return (
    <div className='mpm-helper-container'>
      <img className='spotifyLogo' src={spotifyIcon} />
      {params && params.access_token && (
        <div className='tokenContainer'>
          <input
            className='token'
            ref={textInputRef}
            value={params.access_token}
            readOnly
          />
          <button className='btn' onClick={copyToken}>
            Copy to clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthRedirect;
