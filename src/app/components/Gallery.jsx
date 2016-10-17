import React from 'react';

import Carousel from './Gallery/Carousel';

const images = [
  { src: "http://www.w3schools.com/bootstrap/img_flower.jpg" },
  { src: "http://www.w3schools.com/bootstrap/img_chania.jpg" },
  { src: "http://www.w3schools.com/bootstrap/img_chania2.jpg" },
  { src: "http://www.w3schools.com/bootstrap/img_flower2.jpg" },
];

export default () => (
  <Carousel images={images}/>
);
