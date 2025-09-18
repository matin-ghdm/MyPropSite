import React from 'react';
import ImageSlideshow from '../ui/ImageSlideshow';
import { slideshowData } from '../../data/slideshowData';

const LoginImage = () => {
  return (
    <ImageSlideshow 
      slidesData={slideshowData}
      autoPlay={true}
      interval={6000}
    />
  );
};

export default LoginImage;
