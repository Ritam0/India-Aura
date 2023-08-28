import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import './Incredible_India.css'; // Make sure to create a CSS file for styling
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  const { imageUrl, onHide, beach } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Tour Our Responsibility
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img
          src={imageUrl}
          alt="Image Alt Text"
          className="modal-image"
        />
        <h4>{beach.name} Tour Details:</h4>
        <p>{beach.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const tourismSpots = [
  {
    id: 1,
    link:"/",
    name: '50 Day India Tour',
    description: 'Pack your vision, unpack opportunities – thats the rhythm of a business tour.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
  },
  {
    id: 2,
    link:"/",
    name: '30 Day India Tour',
    description: 'The temple is a place where prayers turn into miracles',
    imageUrl: 'https://i.pinimg.com/564x/3a/13/68/3a13681ec70b40d88953c058c227909a.jpg',
  },
  
];

const Incredible_India = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleViewDetails = (spot) => {
    setSelectedSpot(spot);
    setModalShow(true);
  };

  return (
    <>
      <Navbar />
      <div className="Incredible_India-page-container">
      <div className="video-container">
                <video autoPlay muted loop id="background-video">
                    <source src="/videos/Tourism.mp4" type="video/mp4" />   
                    Your browser does not support the video tag.
                </video>
        </div>
        <h1>Incredible India</h1>
          <div className="Incredible_IndiaDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} class="Incredible_India">
              <div className="Incredible_India2">
              <div className="Incredible_India-content">
                <h2 className="Incredible_India-heading">{spot.name}</h2>
                <p className="Incredible_India-description">{spot.description}</p>
                <img className="Incredible_India-image" src={spot.imageUrl} alt={spot.name} />
                <Button variant="primary" onClick={() => handleViewDetails(spot)}>

                 View Details
                </Button>
              </div>
              </div>
            </div>
          ))}
          </div>
          {selectedSpot && (
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            imageUrl={selectedSpot.imageUrl}
            beach={selectedSpot}
          />
        )}
      </div>
    </>
  );
};

export default Incredible_India;