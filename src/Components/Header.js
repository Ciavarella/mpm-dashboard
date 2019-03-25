import React from 'react';
import P from './P';
import H3 from './H3';
import FlexContainer from './FlexContainer';

const Header = props => {
  const copyToken = () => {
    const params = window.location.search;
    console.log('params', params);
  };

  return (
    <FlexContainer flex='header'>
      <H3 text='Music Per Minute' />
      <P text='About' />
      <a
        href='https://mpm-node-backend.herokuapp.com/dashboard/'
        onClick={copyToken}
      >
        Sign in with Spotify
      </a>
    </FlexContainer>
  );
};

export default Header;
