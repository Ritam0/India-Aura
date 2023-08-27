import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import './Incredible_India.css'; // Make sure to create a CSS file for styling

const tourismSpots = [
  {
    id: 1,
    name: 'Business Tour',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
  },
  {
    id: 2,
    name: 'Cultural Tour',
    description: 'The temple is a place where prayers turn into miracles',
    imageUrl: 'https://i.pinimg.com/564x/3a/13/68/3a13681ec70b40d88953c058c227909a.jpg',
  },
  
];

const TourismPage = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <>
      <Navbar />
      <div className="Incredible_India-page-container">
        <h1>Incredible India</h1>
          <div className="Incredible_IndiaDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} class="Incredible_India">
              <div class="Incredible_India2">
              <div className="Incredible_India-content">
                <h2 className="Incredible_India-heading">{spot.name}</h2>
                <p className="Incredible_India-description">{spot.description}</p>
                <img className="Incredible_India-image" src={spot.imageUrl} alt={spot.name} />
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

export default Incredible_India;