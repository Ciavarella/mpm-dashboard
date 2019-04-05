import React, { Component } from 'react'
import '../../Styles/MusicVisualizer.css'

let correctHeight = window.innerHeight - 400
let targetNode = document.getElementById('body')
const config = { attributes: true }

let fillStyleColor = '#fff'

const callback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.target.className == '') {
      fillStyleColor = '#fff'
    } else {
      fillStyleColor = '#1b1c21'
    }
  }
}

class MusicVisualizer extends Component {
  componentDidMount() {
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

      function renderFrame() {
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
    }
  }
  render() {
    return (
      <div id="content">
        <div className="logo-container">
          <div id="logo" />
          <input type="file" id="file" className="file" accept="audio/*" />
        </div>
        <canvas id="canvas" />
        <audio id="audio" controls />
      </div>
    )
  }
}

export default MusicVisualizer
