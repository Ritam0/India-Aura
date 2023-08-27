import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import './vacations.css'; // Make sure to create a CSS file for styling

const tourismSpots = [
  {
    id: 1,
    name: 'Mountain-Tops',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
  },
  {
    id: 2,
    name: 'Beaches',
    description: 'The temple is a place where prayers turn into miracles',
    imageUrl: 'https://i.pinimg.com/564x/3a/13/68/3a13681ec70b40d88953c058c227909a.jpg',
  },
  {
    id: 1,
    name: 'Outdoor-Attractions',
    description: 'Life is peaceful when you are surround by the forests',
    imageUrl: 'https://i.pinimg.com/564x/16/16/f8/1616f8cd581e09aebdaddabdefdb8f6d.jpg',
  },
  {
    id: 2,
    name: 'Historical-Places',
    description: 'India has a rich biodiversity; spend a holiday in India!',
    imageUrl:'https://i.pinimg.com/564x/a6/74/f4/a674f407d8af1d8987e6599c0e51d5bc.jpg',
  },
];

const Vacation_page = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <>
      <Navbar />
      <div className="Vacation-page-container">
        <h1>Incredible India</h1>
          <div className="Vacation_cardDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} class="Vacation_card">
              <div class="Vacation_card2">
              <div className="Vacation-content">
                <h2 className="Vacation-heading">{spot.name}</h2>
                <p className="Vacation-description">{spot.description}</p>
                <img className="Vacation-image" src={spot.imageUrl} alt={spot.name} />
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

export default Vacation_page;