import React, { useState } from 'react';
import Navbar from './Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Wildlife.css'; // Make sure to create a CSS file for styling

function MyVerticallyCenteredModal(props) {
  const { imageUrl, onHide, wildlifeSpot } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Wildlife Adventure: {wildlifeSpot.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={props.imageUrl}
          alt="Image Alt Text"
          className="modal-image"
        />
        <h4>Tour Details:</h4>
        <p>{wildlifeSpot.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const tourismSpots = [
  {
    id: 1,
    name: 'Sundarbans National Park',
    description: "Tigers of the tide: Sundarbans' majestic guardians.",
    imageUrl: 'https://i.pinimg.com/564x/40/5a/ae/405aae5c581dfef088ac771b22e6bf4c.jpg',
  },
  {
    id: 2,
    name: 'Ranthambore National Park',
    description: "Tales of the wild: Ranthambore's chapters of nature's drama.",
    imageUrl:'https://i.pinimg.com/564x/e5/9b/23/e59b2362364c54e9240bd409f479e233.jpg',
  },
  {
    id: 3,
    name: 'Jaldapara National Park',
    description: 'Jaldapara: Where the wilderness whispers ancient tales',
    imageUrl: 'https://i.pinimg.com/564x/52/11/6e/52116e6a8c93dd06664a2b30058039a1.jpg',
  },
  {
    id: 4,
    name: 'Gorumara National Park',
    description: "Gorumara: Where the forest's heart beats to the rhythm of the wild",
    imageUrl: 'https://i.pinimg.com/564x/d9/ea/f4/d9eaf41d63fe1e72f4ebe53a756c2c97.jpg',
    details: (
      <>
        Day 1: Arrival in Siliguri<br />
        Day 2: Transfer to Gorumara Forest<br />
        Day 3: Jeep Safari - Gorumara National Park<br />
        Day 4: Explore Chapramari Wildlife Sanctuary<br />
        Day 5: River Rafting - Murti River<br />
        Day 6: Visit Samsing and Suntalekhola<br />
        Day 7: Jeep Safari - Jaldapara National Park<br />
        Day 8: Elephant Safari - Jaldapara National Park<br />
        Day 9: Bird Watching - Rasikbill<br />
        Day 10: Departure with Memories<br />
      </>
    ),
  },
  {
    id: 5,
    name: 'Jim Corbett National Park',
    description: "Where tigers roam free: Jim Corbett's majestic domain",
    imageUrl: 'https://i.pinimg.com/564x/a5/c0/b4/a5c0b44f844b815737322a79488c59b2.jpg',
  },
  {
    id: 6,
    name: 'Kaziranga National Park',
    description: 'Kaziranga: Where rhinos roam and nature reigns',
    imageUrl: 'https://i.pinimg.com/564x/20/9c/22/209c22432420096b150c584128b1704f.jpg',
  },

];

const Wildlife = () => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleViewDetails = (spot) => {
    setSelectedSpot(spot);
    setModalShow(true);
  };

  return (
    <>
      <Navbar />
      <div className="Wildlife-page-container">
        <h1>Wildlife Destination</h1>
          <div className="WildlifeDisplay">
          {tourismSpots.map((spot) => (
            <div key={spot.id} class="Wildlife">
              <div class="Wildlife2">
              <div className="Wildlife-content">
                <h2 className="Wildlife-heading">{spot.name}</h2>
                <p className="Wildlife-description">{spot.description}</p>
                <img className="Wildlife-image" src={spot.imageUrl} alt={spot.name} />
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
            wildlifeSpot={selectedSpot}
          />
        )}
      </div>
    </>
  );
};

export default Wildlife;