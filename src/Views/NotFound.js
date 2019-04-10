import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/NotFound.css'

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <Header />
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Woops! Page could not be found.</h2>
        <p>
          The page you are looking for does not exist and has probably never
          existed. If it has existed it probably has been removed for some
          reason.
        </p>
        <a href="/">Back to start</a>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
