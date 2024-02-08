//Corps1.js

import React from 'react';
import './Corps1.css';
import image1 from './images/1.jpg'; 
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/left.png';
import image5 from './images/right.png';


const Corps1 = () => {
  return (
    <div className="corps1-container">
            <div className="left">
        <img className='' src={image4} alt="previous" backgroundcolor="back"/>
      </div>

      <div className="image-container">

      <img className='mpmpmp' src={image1} alt="Image1" />
      </div>
      <div className="image-container">
        <img src={image2} alt="Image2" />
      </div>
      <div className="image-container">
        <img src={image3} alt="Image3" />
      </div>
      <div className="left">
        <img src={image5} alt="next" />
      </div>
      
    </div>
  );
};


export default Corps1;
