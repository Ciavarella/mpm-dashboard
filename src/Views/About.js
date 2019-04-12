import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Styles/About.css'

const About = () => {
  return (
    <div className="aboutContainer">
      <Header />
      <div className="about">
        <div className="aboutTitle">
          <h1>Music Per Minute</h1>
        </div>

        <p>
          Mpm or Music Per Minute is a Visual Studio Code extention that will
          play or pause the music on Spotify based on how fast you type. For
          each charecter you type you will be granted 1 second of playtime on
          Spotify. If you sign up with Spotify you can go to your settings and
          change the the amount of seconds you get per keypress. If your time
          runs out your music will be paused. Don't worry, if you keep writing
          code the music will start to play again.
        </p>

        <h3>Happy coding!</h3>
      </div>
      <Footer />
    </div>
  )
}

export default About
