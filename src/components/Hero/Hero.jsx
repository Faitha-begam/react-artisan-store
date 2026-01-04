import React from 'react';
import './Hero.css';
import hand_icon from '../assets/hand_icon.gif';
import arrow_icon from '../assets/arrow_icon.png';
import hero_image1 from '../assets/hero_image1.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
         <div>
         <div className="hero-hand-icon">
            <p>Discover</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Something</p>
          <p>new</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection<i class="bi bi-arrow-right"></i></div>
        </div>
      </div>
      <div className="hero-right">
      <img src={hero_image1} alt="" />
      </div>
    </div>
  )
}

export default Hero;
