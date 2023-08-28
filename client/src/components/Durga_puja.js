import React, { useState } from 'react';
import './Kashmir.css';
import Navbar from './Navbar';

function Durga_puja() {
  return (
    <>
    <Navbar/>
    <div className="kashmir-card">
      <img
        className="kashmir-card-image"
        src="https://i.pinimg.com/564x/e4/f9/8d/e4f98d9d2716dab02fc2786a464b6aa0.jpg"
        alt="Nestled amidst the Himalayas, Kashmir"
      />
      <div className="kashmir-card-content">
        <h2 className="kashmir-card-title">Kolkata Durga Puja: A Celebration 
        </h2>
        <p className="kashmir-card-text">
        Kolkata, the cultural capital of India, comes alive during the vibrant festival of Durga Puja. This annual extravaganza is more than a religious event; it's a celebration of art, culture, and deep-rooted devotion that engulfs the city in a mesmerizing aura.

As autumn paints the city with a golden hue, the streets of Kolkata transform into a canvas of creativity. Elaborate pandals  spring up, each a unique work of art depicting mythological narratives, historical events, or contemporary social themes. The grandeur of these pandals is awe-inspiring, with intricate decorations and innovative designs that mesmerize visitors from around the world.

Central to Durga Puja is the goddess herself, portrayed as a fierce embodiment of female power triumphing over evil. The idol-making tradition in Kumartuli, an old neighborhood in Kolkata, takes center stage. Artisans meticulously craft the idols by hand, infusing life into clay with devotion and skill. The moment these majestic idols are unveiled, a sense of divinity sweeps through the air.
        </p>
      </div>
    </div>
    
</>
  );
}

export default Durga_puja;
