import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import './Wildlife.css'; // Make sure to create a CSS file for styling

const tourismSpots = [
  {
    id: 1,
    name: 'Jim Corbett National Park',
    description: "Where tigers roam free: Jim Corbett's majestic domain",
    imageUrl: 'https://i.pinimg.com/564x/67/90/ed/6790ed4cc45790d7be9ae88bcf1619a2.jpg',
  },
  {
    id: 2,
    name: 'Kaziranga National Park',
    description: 'Kaziranga: Where rhinos roam and nature reigns',
    imageUrl: 'https://i.pinimg.com/564x/20/9c/22/209c22432420096b150c584128b1704f.jpg',
  },
  {
    id: 1,
    name: 'Sundarbans National Park',
    description: "Tigers of the tide: Sundarbans' majestic guardians.",
    imageUrl: 'https://i.pinimg.com/564x/40/5a/ae/405aae5c581dfef088ac771b22e6bf4c.jpg',
  },
  {
    id: 2,
    name: 'Ranthambore National Park',
    description: "Tales of the wild: Ranthambore's chapters of nature's drama.",
    imageUrl:'https://i.pinimg.com/564x/e5/9b/23/e59b2362364c54e9240bd409f479e233.jpg',
  },
  {
    id: 1,
    name: 'Jaldapara National Park',
    description: 'Jaldapara: Where the wilderness whispers ancient tales',
    imageUrl: 'https://i.pinimg.com/564x/52/11/6e/52116e6a8c93dd06664a2b30058039a1.jpg',
  },
  {
    id: 2,
    name: 'Gorumara National Park',
    description: "Gorumara: Where the forest's heart beats to the rhythm of the wild",
    imageUrl: 'https://i.pinimg.com/564x/d9/ea/f4/d9eaf41d63fe1e72f4ebe53a756c2c97.jpg',
  },


];

const Wildlife = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <>
      <Navbar />
      <div className="Wildlife-page-container">
        <h1>Incredible India</h1>
          <div className="WildlifeDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} class="Wildlife">
              <div class="Wildlife2">
              <div className="Wildlife-content">
                <h2 className="Wildlife-heading">{spot.name}</h2>
                <p className="Wildlife-description">{spot.description}</p>
                <img className="Wildlife-image" src={spot.imageUrl} alt={spot.name} />
                <NavLink to={`/tourism/${spot.id}`} className="btn">
                  View Details
                </NavLink>
              </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </>
  );
};

export default Wildlife;