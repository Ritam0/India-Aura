import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import './Beach.css'
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
          src={props.imageUrl}
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

const BeachPage = () => {
  const [tourDuration, setTourDuration] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  const beachesData = [
    {
      id: 1,
      name: 'Swaraj Dweep',
      location: 'Andaman and Nicobar Island',
      Duration:'7 days',
      imageUrl: 'https://i.pinimg.com/564x/02/92/af/0292affb90ecf7c8536645f53f2b2c24.jpg',
      details: (
        <>
          Day 1: Arrival in Port Blair<br />
          Day 2: Ross Island and North Bay<br />
          Day 3: Port Blair to Havelock Island<br />
          Day 4: Scuba Diving in Havelock<br />
          Day 5: Elephant Beach and Water Sports<br />
          Day 6: Havelock to Neil Island<br />
          Day 7: Neil Island Relaxation<br />
          Day 8: Neil Island to Port Blair<br />
          Day 9: Baratang Island<br />
          Day 10: Port Blair Museums and Markets<br />
          Day 11: Port Blair to Diglipur<br />
          Day 12: Diglipur Exploration<br />
          Day 13: Return to Port Blair<br />
          Day 14: Jolly Buoy or Red Skin Island<br />
          Day 15: Departure
        </>
      ),
    },
    {
        id: 2,
        name: 'Kovalam Beach',
        location: 'TamilNadu',
        Duration:'1 days',
        imageUrl: 'https://i.pinimg.com/564x/02/92/af/0292affb90ecf7c8536645f53f2b2c24.jpg',
      },
      {
        id: 3,
        name: 'Juhu Beach',
        location: 'Mumbai,Maharastra',
        Duration:'14 days',
        imageUrl: 'https://i.pinimg.com/236x/46/52/d3/4652d369dc830282209e22be0a0c931f.jpg',
      },
      {
        id: 4,
        name: 'Swaraj Dweep',
        location: 'Andaman and Nicobar Island',
        Duration:'7 days',
        imageUrl: 'https://i.pinimg.com/564x/02/92/af/0292affb90ecf7c8536645f53f2b2c24.jpg',
      },
      {
        id: 5,
        name: 'Golden Beach',
        location: 'Odisha',
        Duration:'3 days',
        imageUrl: 'https://i.pinimg.com/236x/46/52/d3/4652d369dc830282209e22be0a0c931f.jpg',
      },
      {
          id: 6,
          name: 'Kovalam Beach',
          location: 'TamilNadu',
          Duration:'1 days',
          imageUrl: 'https://i.pinimg.com/564x/02/92/af/0292affb90ecf7c8536645f53f2b2c24.jpg',
        },
        {
          id: 7,
          name: 'Juhu Beach',
          location: 'Mumbai,Maharastra',
          Duration:'14 days',
          imageUrl: 'https://i.pinimg.com/236x/46/52/d3/4652d369dc830282209e22be0a0c931f.jpg',
        },
        {
          id: 8,
          name: 'Kovalam Beach',
          location: 'TamilNadu',
          Duration:'1 days',
          imageUrl: 'https://i.pinimg.com/564x/02/92/af/0292affb90ecf7c8536645f53f2b2c24.jpg',
        },
    ];

    const handleTourDurationChange = (event) => {
      setTourDuration(event.target.value);
    };
  
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredBeaches = beachesData.filter((beach) =>
    beach.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (tourDuration === '' || parseInt(beach.Duration) == parseInt(tourDuration))
  );
  return (
    <>
      <Navbar />
      <div className="beach-page-container">
        <h1>Beach Destinations</h1>
        <div className="search-options">
          <select value={tourDuration} onChange={handleTourDurationChange}>
            <option value="">Select tour duration</option>
            <option value="1">1 day</option>
            <option value="3">3 days</option>
            <option value="7">1 week</option>
            <option value="14">2 weeks</option>
          </select>
          <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchTermChange}
          />
        </div>
        <div className="beach-cards">
          {filteredBeaches.map((beach) => (
            <div key={beach.id} className="beach-card">
              <img className="beach-image" src={beach.imageUrl} alt={beach.name} />
              <h2 className="beach-name">{beach.name}</h2>
              <p className="beach-location">{beach.location}</p>
              <p className="beach-Duration">{beach.Duration}</p>
              <Button variant="primary" onClick={() => setModalShow(beach)}>
                 View Details
              </Button>
            </div>
          ))}
        </div>
        <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                imageUrl={modalShow.imageUrl}
                beach={modalShow}
              />
      </div>
    </>
  );
};

export default BeachPage;

