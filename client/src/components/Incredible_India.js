import React, { useState } from 'react';
import Navbar from './Navbar';
import './Incredible_India.css';
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
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Your Tour Our Responsibility
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={props.imageUrl}
          alt="Image Alt Text"
          className="modal-image"
        />
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
          Day 1: Arrive New Delhi<br />
          Day 2: New Delhi sightseeing and drive to Dharmshala<br />
          Day 3: Arrive Dharamshala and sight seeing<br />
          Day 4: Early morning drive to Amritsar and visit Jalianwala Bagh<br />
          Day 5: Morning visit Golden Temple and Drive to Srinagar<br />
          Day 6: Srinagar<br />
          Day 7: Drive to Leh via Kargil<br />
          Day 8: Leh (visit monasteries)<br />
          Day 9: Leh (drive to Pangong Lake)<br />
          Day 10: Flight to New Delhi and drive to Ranthambore afternoon safari and thereafter to Jaipur<br />
          Day 11: Jaipur (sightseeing)<br />
          Day 12: Jaipur to Jaisalmer overnight train<br />
          Day 13: Jaisalmer(sightseeing)<br />
          Day 14: Early morning SAM Dunes and drive to Udaipur<br />
          Day 15: Udaipur (sightseeing)<br />
          Day 16: Early morning drive to Kutch (overnight camp)<br />
          Day 17: Kutch (stay)<br />
          Day 18: Kutch to Junagadh<br />
          Day 19: Gir National Park morning safari and then drive to Rajkot to board the train for Mumbai<br />
          Day 20: Mumbai Arrival (Rest Day)<br />
          Day 21: Mumbai to Ajanta – ellora and stay at Aurangabad<br />
          Day 22: Aurangabad to Goa flight<br />
          Day 23: Goa<br />
          Day 24: Goa<br />
          Day 25: Goa to Munnar Drive<br />
          Day 26: Munnar (sightseeing)<br />
          Day 27: Munnar to Alleppey (Drive)<br />
          Day 28: Alleppey (backwater tour<br />
          Day 29: Alleppey to Mahabalipuram Drive<br />
          Day 30: Mahabalipuram to Tirupati (stay)<br />
          Day 31: Tirupati to Bangalore Drive<br />
          Day 32: Bangalore (Rest Day)<br />
          Day 33: Bangalore to Hampi via Hospet (stay)<br />
          Day 34: Hospet to Badami and drive to Bangalore<br />
          Day 35: Bangalore to Bhubaneshwar flight and thereafter drive to Puri<br />
          Day 36: Puri – Konark – Puri<br />
          Day 37: Puri – Bhubaneshwar – Board the train for Kolkata<br />
          Day 38: Kolkata (stay)<br />
          Day 39: Kolkata to Shillong flight<br />
          Day 40: Shillong (sightseeing)<br />
          Day 41: Shillong to Gangtok (Drive 12 hours)<br />
          Day 42: Gangtok (local sightseeing)<br />
          Day 43: Gangtok (drive to Nathu La and Changu Lake)<br />
          Day 44: Gangtok to NJP and board the train for Varanasi<br />
          Day 45: Varanasi (sightseeing)<br />
          Day 46: Varanasi to Khajuraho (Drive) and sightseeing<br />
          Day 47: Khajuraho sightseeing and thereafter drive to Agra<br />
          Day 48: Agra (sightseeing)<br />
          Day 49: Agra to New Delhi Drive<br />
          Day 50: New Delhi (Departure – Evening)<br />

      
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