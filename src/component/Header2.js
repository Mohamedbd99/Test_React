// Header2.js
import React from 'react';
import './Header2.css';
import image1 from './images/yout.png';
import image2 from './images/insta.png';
import image3 from './images/facebook.png';

const Header2 = () => {
  return (
    <div className="header2-container">
      <div className="composant">
        <p>LISTEN LIVE</p>
        <p>CONTACT US</p>
        <p>GET THE APP</p>
      </div>
      <div className="images-container">
        <img src={image1} alt="YouTube" />
        <img src={image2} alt="Instagram" />
        <img src={image3} alt="Facebook" />
      </div>
    </div>
  );
};

export default Header2;
