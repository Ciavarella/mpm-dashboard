import React from 'react';
import Header from '../Components/Header';
import '../index.css';
import MusicVisualizer from '../Utils/Music-Visualizer/MusicVisualizer';

const Start = () => {
  return (
    <div className='start-page'>
      <Header />
      <MusicVisualizer />
    </div>
  );
};

export default Start;
