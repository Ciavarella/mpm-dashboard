import React from 'react'
import P from './P'
import H3 from './H3'
import FlexContainer from './FlexContainer'
import { getToken } from '../Utils/Fetch.js'

const Header = props => {
  const fetchTokens = () => {
    getToken()
  }

  return (
    <FlexContainer flex="header">
      <H3 text="Music Per Minute" />
      <P text="About" />
      <button onClick={fetchTokens}>Sign in with Spotify</button>
    </FlexContainer>
  )
}

export default Header
