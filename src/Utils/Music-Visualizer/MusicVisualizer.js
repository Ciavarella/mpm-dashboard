import React, { useEffect, useState } from 'react'
import '../../Styles/MusicVisualizer.css'

let correctHeight = window.innerHeight - 300
let targetNode = document.getElementById('body')
const config = { attributes: true }

let fillStyleColor =
  localStorage.getItem('mode') === 'dark' ? '#1b1c21' : '#fff'

const MusicVisualizer = () => {
  const [showFile, toggleFileUpload] = useState(true)
  useEffect(() => {
    const callback = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.target.className === '') {
          fillStyleColor = '#fff'
        } else {
          fillStyleColor = '#1b1c21'
        }
      }
    }
    let observer = new MutationObserver(callback)
    observer.observe(targetNode, config)

    let file = document.querySelector('#file')
    let audio = document.querySelector('#audio')

    file.onchange = function() {
      let files = this.files
      audio.src = URL.createObjectURL(files[0])
      audio.load()
      audio.play()

      let context = new AudioContext()
      let src = context.createMediaElementSource(audio)
      let analyser = context.createAnalyser()
      let canvas = document.querySelector('#canvas')
      canvas.width = window.innerWidth
      canvas.height = correctHeight
      let ctx = canvas.getContext('2d')
      src.connect(analyser)
      analyser.connect(context.destination)
      analyser.fftSize = 256

      let bufferLength = analyser.frequencyBinCount
      let dataArray = new Uint8Array(bufferLength)
      let WIDTH = canvas.width
      let HEIGHT = canvas.height
      let barWidth = (WIDTH / bufferLength) * 2.5
      let barHeight
      let x = 0

      const renderFrame = () => {
        requestAnimationFrame(renderFrame)
        x = 0
        analyser.getByteFrequencyData(dataArray)
        ctx.fillStyle = fillStyleColor
        ctx.fillRect(0, 0, WIDTH, HEIGHT)
        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i]
          let r = 0
          let g = 0
          let b = 0
          if (fillStyleColor === '#fff') {
            r = barHeight + 25 * (i / bufferLength)
            g = 5 * (i / bufferLength)
            b = 177
          } else {
            r = 5 * (i / bufferLength)
            g = barHeight + 150 * (i / bufferLength)
            b = 50
          }

          ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)
          x += barWidth + 1
        }
      }
      audio.play()
      renderFrame()
      toggleFileUpload(false)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div id="content">
      <div className="logo-container">
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
        {showFile ? (
          <div className="mp3">
            <p>Visualize your music here</p>
            <input type="file" id="file" className="file" accept="audio/*" />
          </div>
        ) : (
          ''
        )}
      </div>
      <canvas id="canvas" />
      <audio id="audio" controls />
    </div>
  )
}

export default MusicVisualizer
