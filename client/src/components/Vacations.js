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
    imageUrl: 'https://i.pinimg.com/564x/1f/c2/52/1fc252a644755e2f6dbe458d0478ee1c.jpg',
  },
  {
    id: 2,
    name: 'Beaches',
    description: 'The temple is a place where prayers turn into miracles',
    imageUrl: 'https://i.pinimg.com/564x/e7/04/56/e7045643b35fba6754bf68e0dcae3bb0.jpg',
  },
  {
    id: 1,
    name: 'Outdoor-Attractions',
    description: 'Life is peaceful when you are surround by the forests',
    imageUrl: 'https://i.pinimg.com/564x/1a/af/c4/1aafc4a4a11c75993dd2c3e7d6c56aef.jpg',
  },
  {
    id: 2,
    name: 'Historical-Places',
    description: 'India has a rich biodiversity; spend a holiday in India!',
    imageUrl:'https://i.pinimg.com/564x/ee/29/7e/ee297eb6a40e02cfa4fdd3c9ae847af4.jpg',
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