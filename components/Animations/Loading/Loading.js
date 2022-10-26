import React from 'react';
import Lottie from 'react-lottie-player';
import LoadingAnimation from './Loading.json';

function LoadingAnimate() {
  return (
    <Lottie
      loop={true}
      animationData={LoadingAnimation}
      play={true}
      style={{ width: '100px', height: '100px' }}
    />
  );
}

export default LoadingAnimate;
