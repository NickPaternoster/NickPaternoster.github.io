import React, { useState } from 'react';
import '../styles/CV_BoxesStyle.css';
import Modal from 'react-modal';

const CV_Boxes = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customModalStyles = {
    content: {
      width: '300px',
      height: '200px',
      margin: 'auto',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <div className="cv-box" onClick={handleClick}>
      <div className="box-content">
        <div className="box-title">{title}</div>
        <div className="box-description">{description}</div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Modal"
      >
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default CV_Boxes;
