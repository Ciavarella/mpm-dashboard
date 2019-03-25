import React from 'react';
import mock from '../Components/mock';
import Footer from '../Components/Footer.js';
import '../Styles/SignedIn.css';

const SignedIn = props => {
  console.log('mocking', mock);
  return (
    <div className='signedInContainer'>
      <h1>signed in view</h1>
      <Footer />
    </div>
  );
};

export default SignedIn;
