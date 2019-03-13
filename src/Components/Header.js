import React from 'react';
import P from './P';
import H3 from './H3';
import Button from './Button';
import FlexContainer from './FlexContainer';

const Header = props => (
  <FlexContainer flex='header'>
    <H3 text='Music Per Minute' />
    <P text='About' />
    <a href='https://mpm-node-backend.herokuapp.com/auth/'>
      Sign in with Spotify
    </a>
  </FlexContainer>
);

export default Header;
