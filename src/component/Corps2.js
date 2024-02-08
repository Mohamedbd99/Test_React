// Corps2.js

import React from 'react';
import './Corps2.css';
import image from './images/last.png'; 
import smallImage from './images/play.png'; 


const Corps2 = () => {
  return (
    <div className="containerbb">
      
      <img src={image} alt="Description" className="image" />
      <img src={smallImage} alt="play" className="small-image" />

      <div className="overlay113"></div> 
    </div>
  );
};

export default Corps2;
