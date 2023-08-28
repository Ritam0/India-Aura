import React, { useState } from 'react';
import './Kashmir.css';
import Navbar from './Navbar';

function Kashmir() {
  return (
    <>
    <Navbar/>
    <div className="kashmir-card">
      <img
        className="kashmir-card-image"
        src="https://i.pinimg.com/564x/f5/c6/76/f5c67607795ab4fece320799eea54908.jpg"
        alt="Nestled amidst the Himalayas, Kashmir"
      />
      <div className="kashmir-card-content">
        <h2 className="kashmir-card-title">Nestled amidst the Himalayas, Kashmir</h2>
        <p className="kashmir-card-text">
          
Nestled amidst the Himalayas, Kashmir is a treasure trove of natural splendor and cultural diversity. Its landscapes, adorned with snow-capped peaks, serene lakes, and lush valleys, have earned it the title "Paradise on Earth." Yet, beyond its breathtaking scenery, Kashmir's allure lies in its fusion of cultures. Influences from Central Asia, Persia, and India converge here, weaving a tapestry of traditions, art, and culinary delights.

Dal Lake, a jewel in Kashmir's crown, features vibrant houseboats and floating gardens, creating an ethereal ambiance. The air is scented with the fragrant aromas of saffron-infused delicacies in bustling markets, where locals extend heartfelt hospitality.

Kashmir's enchantment transcends visuals. It's a realm where history echoes through ancient Mughal gardens and thrill-seekers find solace in trekking its rugged terrains. Whether finding serenity in a Shikara boat ride or seeking adventure on mountain slopes, Kashmir promises an indelible expedition, where nature and culture dance in harmony.
        </p>
      </div>
    </div>
    
</>
  );
}

export default Kashmir;
