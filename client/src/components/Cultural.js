import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import './Cultural.css'; // Make sure to create a CSS file for styling

const tourismSpots = [
  {
    id: 1,
    name: 'Char Dham',
    description: 'Char Dham yatra: Where faith meets the peaks.',
    imageUrl: 'https://i.pinimg.com/564x/4b/0e/26/4b0e26407342cd8ca079b1ee2900093a.jpg',
  },
  {
    id: 2,
    name: 'Haridwar',
    description: 'Haridwar: Where the Ganges flows and spirituality thrives.',
    imageUrl: 'https://i.pinimg.com/564x/3a/13/68/3a13681ec70b40d88953c058c227909a.jpg',
    details: (
        <>
          Day 1: Arrival in Haridwar<br />
          Day 2: Har Ki Pauri and Mansa Devi Temple<br />
          Day 3: Yoga and Meditation<br />
          Day 4: Rishikesh Excursion<br />
          Day 5: Rajaji National Park<br />
          Day 6: Haridwar Temples<br />
          Day 7: Ghat and Temple Exploration<br />
          Day 8: Ayurveda and Wellness<br />
          Day 9: Ganges Dip and Rituals<br />
          Day 10: Haridwar Markets<br />
          Day 11: Chilla Wildlife Sanctuary<br />
          Day 12: Temple Pilgrimage<br />
          Day 13: Ganga Riverside Picnic<br />
          Day 14: Departure<br />
        </>
    )
  },
  {
    id: 1,
    name: 'Amarnath',
    description: 'Amarnath: Where the heart finds its icy solace.',
    imageUrl: 'https://i.pinimg.com/564x/7d/a0/31/7da0317cd57af4c091488f1a72c9ab0e.jpg',
  },
  {
    id: 2,
    name: 'Vaishno Devi',
    description: 'Vaishno Devi: Where faith ascends and wishes find wings.',
    imageUrl:'https://i.pinimg.com/564x/18/db/b0/18dbb0fb3ecae82ba564c5fe95323efb.jpg',
  },
  {
    id: 1,
    name: 'Puri',
    description: 'Puri: Where history whispers through ancient walls',
    imageUrl: 'https://i.pinimg.com/564x/80/1b/57/801b57dce7aaf165000fc2d19b9d1a5c.jpg',
  },
  {
    id: 2,
    name: 'Tirupati',
    description: "Tirupati's call: Answered by millions, felt by souls",
    imageUrl: 'https://i.pinimg.com/564x/ab/79/6c/ab796cd5284de124e0927fdecb00ae89.jpg',
  },
  {
    id: 1,
    name: 'Kamakhya',
    description: 'Kamakhya: Where mysticism flows with the sacred river.',
    imageUrl: 'https://i.pinimg.com/564x/64/be/85/64be85cc47bbb74d8424b2c1566b8df3.jpg',
  },
  {
    id: 2,
    name: 'Varanasi',
    description: "Varanasi's steps lead not just to ghats, but to the soul.",
    imageUrl: 'https://i.pinimg.com/564x/68/29/5c/68295c0bd07aacc9a8c58016a26a0144.jpg',
  },
];

function MyVerticallyCenteredModal(props) {
  const { imageUrl, onHide, spot } = props;
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
        <h4>{spot.name} Tour Details:</h4>
        <p>{spot.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Cultural_page = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleViewDetails = (spot) => {
    setSelectedSpot(spot);
    setModalShow(true);
  };

  return (
    <>
      <Navbar />
      <div className="Cultural-page-container">
        <h1>Incredible India</h1>
        <div className="CulturalDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} className="Cultural">
              <div className="Cultural2">
                <div className="Cultural-content">
                  <h2 className="Cultural-heading">{spot.name}</h2>
                  <p className="Cultural-description">{spot.description}</p>
                  <img className="Cultural-image" src={spot.imageUrl} alt={spot.name} />
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
            spot={selectedSpot}
          />
        )}
      </div>
    </>
  );
};
export default Cultural_page;