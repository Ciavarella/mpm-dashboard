import { useEffect } from 'react'

/**
 * Checks the token from the url
 * If there is no token the user will be redirected to "/"
 * If there is a token it sets it in localstorage and redirects
 * the user to "/dashboard"
 */
const AuthRedirectApi = props => {
  useEffect(() => {
    const params = window.location.search
    const token = params.split('=')[1]
    if (!token) {
      window.location.replace('/')
    } else {
      localStorage.setItem('token', token)
      props.history.push('/dashboard')
    }
  }, [])
  return null
}

export default AuthRedirectApi
