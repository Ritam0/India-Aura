import React, { useState } from 'react';
import './Tajmahal.css';

function Tajmahal() {
  const [descriptions, setDescriptions] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handleDescriptionChange = (e, index) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = e.target.value;
    setDescriptions(newDescriptions);
  };

  const handlePhotoChange = (e, index) => {
    const newPhotos = [...photos];
    newPhotos[index] = e.target.files[0];
    setPhotos(newPhotos);
  };

  const handleAddField = () => {
    setDescriptions([...descriptions, '']);
    setPhotos([...photos, null]);
  };

  const handleRemoveField = (index) => {
    const newDescriptions = descriptions.filter((_, i) => i !== index);
    const newPhotos = photos.filter((_, i) => i !== index);
    setDescriptions(newDescriptions);
    setPhotos(newPhotos);
  };

  return (
    <div className="App">
      <h1>Taj Mahal Descriptions</h1>
      {descriptions.map((description, index) => (
        <div key={index} className="description-field">
          <h2>Description {index + 1}</h2>
          <textarea
            value={description}
            onChange={(e) => handleDescriptionChange(e, index)}
            placeholder="Write a description..."
          />
          <input
            type="file"
            onChange={(e) => handlePhotoChange(e, index)}
            accept="image/*"
          />
          <button onClick={() => handleRemoveField(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add Description</button>
    </div>
  );
}

export default Tajmahal;
