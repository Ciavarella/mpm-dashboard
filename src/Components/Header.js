import React from 'react'
import P from './P'
import H3 from './H3'
import FlexContainer from './FlexContainer'

const signin_uri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/dashboard'
    : 'https://mpm-node-backend.herokuapp.com/dashboard'

const Header = props => {
  return (
    <FlexContainer flex="header">
      <H3 text="Music Per Minute" />
      <P text="About" />
      <a href={signin_uri}>Sign in with Spotify</a>
    </FlexContainer>
  )
}

export default Header
