// Group1.js

import React from 'react';
import './Group1.css';

const backgroundImageUrl = require('./images/back.jpg');
const image1Url = require('./images/im1.png');
const image2Url = require('./images/im2.png');

const Group1 = () => {
  const text1 = "We are one people but we live as if ";
  const text2 = "Divided … everything is connected";

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="overlay"></div> 
      <div className="image1" style={{ backgroundImage: `url(${image1Url})` }}></div>
      <div className="image2" style={{ backgroundImage: `url(${image2Url})` }}></div>
      <p className="text-vertical">{text1}</p> 
      <p className="text-vertical2">{text2}</p> 
    </div>
  );
};

export default Group1;
