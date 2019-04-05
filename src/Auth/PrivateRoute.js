import React, { useContext, useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import Loader from '../Components/Loader'

/**
 * Method that just sets a timeout to show a loader.
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Private routes, the user needs to be signed in to be able to
 * see go to the specific route.
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoading, toggleLoading] = useState(true)
  const { isAuth, signin } = useContext(AuthContext)
  const token = localStorage.getItem('token')

  useEffect(() => {
    async function sleepytime() {
      signin(token)
      await sleep(1400)
      toggleLoading(false)
    }
    if (token) {
      sleepytime()
    } else {
      toggleLoading(false)
    }
  }, [])

  return isLoading ? (
    <Loader />
  ) : (
    <Route
      {...rest}
      render={props =>
        isAuth === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

export default PrivateRoute
