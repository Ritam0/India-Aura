import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import './Beach.css'

const BeachPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [tourDuration, setTourDuration] = useState('');
  const beachesData = [
    {
      id: 1,
      name: 'Puri Beach',
      location: 'Puri,odisha',
      Duration:'7 days',
      imageUrl: 'https://i.pinimg.com/564x/02/92/af/0292affb90ecf7c8536645f53f2b2c24.jpg',
    },
    {
      id: 2,
      name: 'Juhu Beach',
      location: 'Mumbai, USA',
      Duration:'3 days',
      imageUrl: 'https://i.pinimg.com/236x/46/52/d3/4652d369dc830282209e22be0a0c931f.jpg',
    },
    {
        id: 1,
        name: 'Puri Beach',
        location: 'Puri,odisha',
        Duration:'1 days',
        imageUrl: 'https://i.pinimg.com/564x/02/92/af/0292affb90ecf7c8536645f53f2b2c24.jpg',
      },
      {
        id: 2,
        name: 'Juhu Beach',
        location: 'Mumbai, USA',
        Duration:'14 days',
        imageUrl: 'https://i.pinimg.com/236x/46/52/d3/4652d369dc830282209e22be0a0c931f.jpg',
      },
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

    const handleTourDurationChange = (event) => {
        setTourDuration(event.target.value);
    };

  return (
    <>
      <Navbar />
      <div className="beach-page-container">
        <h1>Beach Destinations</h1>
        <div className="search-options">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <select value={tourDuration} onChange={handleTourDurationChange}>
            <option value="">Select tour duration</option>
            <option value="1">1 day</option>
            <option value="3">3 days</option>
            <option value="7">1 week</option>
            <option value="14">2 weeks</option>
          </select>
        </div>
        <div className="beach-cards">
          {beachesData.map((beach) => (
            <div key={beach.id} className="beach-card">
              <img className="beach-image" src={beach.imageUrl} alt={beach.name} />
              <h2 className="beach-name">{beach.name}</h2>
              <p className="beach-location">{beach.location}</p>
              <p className="beach-Duration">{beach.Duration}</p>
              <NavLink to={`/beaches/${beach.id}`} className="btn">
                View Details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BeachPage;

