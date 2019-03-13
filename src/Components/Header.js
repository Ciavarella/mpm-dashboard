import React from 'react'
import P from './P'
import H3 from './H3'
import Button from './Button'
import FlexContainer from './FlexContainer'

const Header = props => (
  <FlexContainer flex="header">
    <H3 text="Music Per Minute" />
    <P text="About" />
    <Button onClick="login" text="Sign in with Spotify" />
  </FlexContainer>
)

export default Header
