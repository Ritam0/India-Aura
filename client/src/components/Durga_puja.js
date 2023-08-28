import React, { useState } from 'react';
import './Durga_puja.css';

function Durga_puja() {
  const [descriptions, setDescriptions] = useState([{ description: '', photoLink: '' }]);

  const handleDescriptionChange = (e, index) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index].description = e.target.value;
    setDescriptions(newDescriptions);
  };

  const handlePhotoLinkChange = (e, index) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index].photoLink = e.target.value;
    setDescriptions(newDescriptions);
  };

  const handleAddField = () => {
    setDescriptions([...descriptions, { description: '', photoLink: '' }]);
  };

  const handleRemoveField = (index) => {
    const newDescriptions = descriptions.filter((_, i) => i !== index);
    setDescriptions(newDescriptions);
  };

  return (
    <div className="App">
      <h1>Kolkata Durga Puja Descriptions</h1>
      {descriptions.map((descriptionObj, index) => (
        <div key={index} className="description-field">
          <h2>Description {index + 1}</h2>
          <textarea
            value={descriptionObj.description}
            onChange={(e) => handleDescriptionChange(e, index)}
            placeholder="Write a description..."
          />
          <input
            type="text"
            value={descriptionObj.photoLink}
            onChange={(e) => handlePhotoLinkChange(e, index)}
            placeholder="Enter photo link..."
          />
          <button onClick={() => handleRemoveField(index)}>Remove</button>
        </div>
      ))}
      <button className="add-button" onClick={handleAddField}>Add Description</button>
    </div>
  );
}

export default Durga_puja;
