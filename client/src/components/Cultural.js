import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import './Cultural.css'; // Make sure to create a CSS file for styling

const tourismSpots = [
  {
    id: 1,
    name: 'Chaar Dham',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/4b/0e/26/4b0e26407342cd8ca079b1ee2900093a.jpg',
  },
  {
    id: 2,
    name: 'Haridwar',
    description: 'The temple is a place where prayers turn into miracles',
    imageUrl: 'https://i.pinimg.com/564x/3a/13/68/3a13681ec70b40d88953c058c227909a.jpg',
  },
  {
    id: 1,
    name: 'Amarnath',
    description: 'Life is peaceful when you are surround by the forests',
    imageUrl: 'https://i.pinimg.com/564x/7d/a0/31/7da0317cd57af4c091488f1a72c9ab0e.jpg',
  },
  {
    id: 2,
    name: 'Vaishno Devi',
    description: 'India has a rich biodiversity; spend a holiday in India!',
    imageUrl:'https://i.pinimg.com/564x/18/db/b0/18dbb0fb3ecae82ba564c5fe95323efb.jpg',
  },
  {
    id: 1,
    name: 'Puri',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/80/1b/57/801b57dce7aaf165000fc2d19b9d1a5c.jpg',
  },
  {
    id: 2,
    name: 'Tirupathi',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/ab/79/6c/ab796cd5284de124e0927fdecb00ae89.jpg',
  },
  {
    id: 1,
    name: 'Kamakhya',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/64/be/85/64be85cc47bbb74d8424b2c1566b8df3.jpg',
  },
  {
    id: 2,
    name: 'Venaras',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/68/29/5c/68295c0bd07aacc9a8c58016a26a0144.jpg',
  },
];

const Cultural_page = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <>
      <Navbar />
      <div className="Cultural-page-container">
        <h1>Incredible India</h1>
          <div className="CulturalDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} class="Cultural">
              <div class="Cultural2">
              <div className="Cultural-content">
                <h2 className="Cultural-heading">{spot.name}</h2>
                <p className="Cultural-description">{spot.description}</p>
                <img className="Cultural-image" src={spot.imageUrl} alt={spot.name} />
              </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </>
  );
};

export default Cultural_page;