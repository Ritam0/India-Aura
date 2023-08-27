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
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
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
    imageUrl: 'https://i.pinimg.com/564x/16/16/f8/1616f8cd581e09aebdaddabdefdb8f6d.jpg',
  },
  {
    id: 2,
    name: 'Vaishno Devi',
    description: 'India has a rich biodiversity; spend a holiday in India!',
    imageUrl:'https://i.pinimg.com/564x/a6/74/f4/a674f407d8af1d8987e6599c0e51d5bc.jpg',
  },
  {
    id: 1,
    name: 'Puri',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
  },
  {
    id: 2,
    name: 'Tirupathi',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
  },
  {
    id: 1,
    name: 'Kamakhya',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
  },
  {
    id: 2,
    name: 'Venaras',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
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
                <img className="sCultural-image" src={spot.imageUrl} alt={spot.name} />
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