import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import './Dream_tour.css'; // Make sure to create a CSS file for styling
import Cultural from './Cultural.js'
import WholeIndia from "./image/WholeIndia.mp4"

const tourismSpots = [
  {
    id: 1,
    name: 'Incredible_India',
    link:'./Incredible_India.js',
    description: 'Incredible India: where traditions dance and colors come alive.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
  },
  {
    id: 2,
    link:'./Cultural.js',
    name: 'Cultural Tour',
    description: 'The temple is a place where prayers turn into miracles',
    imageUrl: 'https://i.pinimg.com/564x/3a/13/68/3a13681ec70b40d88953c058c227909a.jpg',
  },
  {
    id: 1,
    name: 'Wildlife Tour',
    link:'./Wildlife',
    description: 'Life is peaceful when you are surround by the forests',
    imageUrl: 'https://i.pinimg.com/564x/16/16/f8/1616f8cd581e09aebdaddabdefdb8f6d.jpg',
  },
  {
    id: 2,
    link:'./vacations.js',
    name: 'Vacation',
    description: 'India has a rich biodiversity; spend a holiday in India!',
    imageUrl:'https://i.pinimg.com/564x/a6/74/f4/a674f407d8af1d8987e6599c0e51d5bc.jpg',
  },
];

const TourismPage = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <>
      <Navbar />
      <div className="tourism-page-container">
      <div className="video-container">
          <video autoPlay muted loop id="background-video">
            <source src={WholeIndia} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1>Incredible India</h1>
          <div className="cardDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} class="card">
              <div class="card2">
              <div className="spot-content">
                <h2 className="spot-heading">{spot.name}</h2>
                <p className="spot-description">{spot.description}</p>
                <img className="spot-image" src={spot.imageUrl} alt={spot.name} />
                <NavLink to={`/${spot.link}`} className="btn">
                  View Details
                </NavLink>
              </div>
              </div>
              <div className="scroll">
                Scroll Down For <span>Your Dream Tour</span> 
              </div>

            </div>
          ))}
          </div>
      </div>
    </>
  );
};

export default TourismPage;