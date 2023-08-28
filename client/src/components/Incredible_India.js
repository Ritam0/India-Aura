import React, { useState } from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import './Incredible_India.css'; // Make sure to create a CSS file for styling
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

const tourismSpots = [
  {
    id: 1,
    link:"/",
    name: '50 Day India Tour',
    description: 'Fifty days, fifty stories; let your journey be a tapestry of unforgettable moments.',
    imageUrl: 'https://i.pinimg.com/564x/83/64/40/836440f5a61124dc869d8a90c868ddf7.jpg',
    details: (
      <>
          Incredible India Tour: 
          ·	Day 1: Arrive New Delhi
          ·	Day 2: New Delhi sightseeing and drive to Dharmshala
          ·	Day 3: Arrive Dharamshala and sight seeing
          ·	Day 4: Early morning drive to Amritsar and visit Jalianwala Bagh
          ·	Day 5: Morning visit Golden Temple and Drive to Srinagar
          ·	Day 6: Srinagar
          ·	Day 7: Drive to Leh via Kargil
          ·	Day 8: Leh (visit monasteries)
          ·	Day 9: Leh (drive to Pangong Lake)
          ·	Day 10: Flight to New Delhi and drive to Ranthambore afternoon safari and thereafter to Jaipur
          ·	Day 11: Jaipur (sightseeing)
          ·	Day 12: Jaipur to Jaisalmer overnight train
          ·	Day 13: Jaisalmer(sightseeing)
          ·	Day 14: Early morning SAM Dunes and drive to Udaipur
          ·	Day 15: Udaipur (sightseeing)
          ·	Day 16: Early morning drive to Kutch (overnight camp)
          ·	Day 17: Kutch (stay)
          ·	Day 18: Kutch to Junagadh
          ·	Day 19: Gir National Park morning safari and then drive to Rajkot to board the train for Mumbai
          ·	Day 20: Mumbai Arrival (Rest Day)
          ·	Day 21: Mumbai to Ajanta – ellora and stay at Aurangabad
          ·	Day 22: Aurangabad to Goa flight
          ·	Day 23: Goa
          ·	Day 24: Goa
          ·	Day 25: Goa to Munnar Drive
          ·	Day 26: Munnar (sightseeing)
          ·	Day 27: Munnar to Alleppey (Drive)
          ·	Day 28: Alleppey (backwater tour)
          ·	Day 29: Alleppey to Mahabalipuram Drive
          ·	Day 30: Mahabalipuram to Tirupati (stay)
          ·	Day 31: Tirupati to Bangalore Drive
          ·	Day 32: Bangalore (Rest Day)
          ·	Day 33: Bangalore to Hampi via Hospet (stay)
          ·	Day 34: Hospet to Badami and drive to Bangalore
          ·	Day 35: Bangalore to Bhubaneshwar flight and thereafter drive to Puri
          ·	Day 36: Puri – Konark – Puri
          ·	Day 37: Puri – Bhubaneshwar – Board the train for Kolkata
          ·	Day 38: Kolkata (stay)
          ·	Day 39: Kolkata to Shillong flight
          ·	Day 40: Shillong (sightseeing)
          ·	Day 41: Shillong to Gangtok (Drive 12 hours)
          ·	Day 42: Gangtok (local sightseeing)
          ·	Day 43: Gangtok (drive to Nathu La and Changu Lake)
          ·	Day 44: Gangtok to NJP and board the train for Varanasi
          ·	Day 45: Varanasi (sightseeing)
          ·	Day 46: Varanasi to Khajuraho (Drive) and sightseeing
          ·	Day 47: Khajuraho sightseeing and thereafter drive to Agra
          ·	Day 48: Agra (sightseeing)
          ·	Day 49: Agra to New Delhi Drive
          ·	Day 50: New Delhi (Departure – Evening)

      
      </>
    )
  },
  {
    id: 2,
    link:"/",
    name: '30 Day India Tour',
    description: 'Thirty days, countless memories – let the journey begin.',
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
            spot={selectedSpot}
          />
        )}
      </div>
    </>
  );
};

export default Incredible_India;