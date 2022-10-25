import React from 'react';
import Lottie from 'react-lottie-player';
import HeadingGlitchAnimation from './HeadingGlitch.json';

function HeadingGlitch() {
  return (
    <Lottie
      loop={true}
      animationData={HeadingGlitchAnimation}
      play={true}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default HeadingGlitch;
