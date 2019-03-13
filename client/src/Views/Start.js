import React, { Component } from 'react';
import Header from '../Components/Header';
import '../index.css';
import MusicVisualizer from '../Utils/Music-Visualizer/MusicVisualizer';

class Start extends Component {
  render() {
    return (
      <div className='start-page'>
        <Header />
        <MusicVisualizer />
      </div>
    );
  }
}

export default Start;
