import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import './doctors.css'; // Make sure to create a CSS file for styling

const tourismSpots = [
  {
    id: 1,
    name: 'Golden Gate Bridge',
    location: 'San Francisco, USA',
    description: 'Iconic suspension bridge known for its beauty and engineering.',
    entryFee: 'Free',
    imageUrl: 'https://example.com/golden-gate-bridge.jpg',
  },
  {
    id: 2,
    name: 'Eiffel Tower',
    location: 'Paris, France',
    description: 'Landmark wrought-iron tower with an observation deck for stunning city views.',
    entryFee: 'Varies',
    imageUrl: 'https://example.com/eiffel-tower.jpg',
  },
  // Add more tourism spots here
];

const TourismPage = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  const handleOpenModal = (spot) => {
    setSelectedSpot(spot);
  };

  const handleCloseModal = () => {
    setSelectedSpot(null);
  };

  return (
    <>
      <Navbar />
      <div className="tourism-page-container">
        <h1>Tourism Spots</h1>
        <section id="spot-cards">
          {tourismSpots.map((spot) => (
            <div key={spot.id} className="spot-card">
              <div className="spot-content">
                <p className="spot-heading">{spot.name}</p>
                <button className="btn" onClick={() => handleOpenModal(spot)}>View Details</button>
              </div>
            </div>
          ))}
        </section>
        {selectedSpot && (
          <Modal
            isOpen={true}
            onRequestClose={handleCloseModal}
            contentLabel="Tourism Spot Details"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2>Tourism Spot Details</h2>
            <p><b>Name:</b> {selectedSpot.name}</p>
            <p><b>Location:</b> {selectedSpot.location}</p>
            <p><b>Description:</b> {selectedSpot.description}</p>
            <p><b>Entry Fee:</b> {selectedSpot.entryFee}</p>
            <img src={selectedSpot.imageUrl} alt={selectedSpot.name} className="spot-image" />
            <button className='btn' onClick={handleCloseModal}>Close</button>
          </Modal>
        )}
        <NavLink className="tourism-navlink" to="/Feedback">
          <button className='btn'>Give Feedback</button>
        </NavLink>
      </div>
    </>
  );
};

export default TourismPage;