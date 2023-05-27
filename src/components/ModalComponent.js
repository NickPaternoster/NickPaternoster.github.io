import React from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

const ModalComponent = ({
  title,
  description,
  isOpen,
  closeModal,
  children,
  experience,
  environment,
}) => {
  const customModalStyles = {
    content: {
      width: '50%',
      height: '60%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // Align content to the top vertically
      textAlign: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
  };

  const skillLevelContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between columns
    marginTop: '0',
    marginBottom: '5px',
    width: '90%',
  };

  const skillLevelTextStyles = {
    width: '100px', // Adjust the width as per your requirement
  };

  const experienceTextStyles = {};

  const environmentTextStyles = {};

  const columnStyles = {
    flex: 1, // Each column takes up equal width
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Align content vertically in the middle
  };

  const labelAndCircleStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const circleContainerStyles = {
    marginLeft: '-5px', // Add left margin to separate from the label
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Modal"
    >
      <button style={closeButtonStyles} onClick={closeModal}>
        &times; {/* Use the &times; HTML entity for the "x" symbol */}
      </button>
      <h2>{title}</h2>
      <div style={skillLevelContainerStyles}>
        <div style={columnStyles}>
          <div style={labelAndCircleStyles}>
            <p style={skillLevelTextStyles}>Skill Level</p>
            <div style={circleContainerStyles}>
              {children} {/* Render the circle element */}
            </div>
          </div>
        </div>
        <div style={columnStyles}>
          <p style={experienceTextStyles}>Experience: {experience}</p> {/* Add the "experience" text and value */}
        </div>
        <div style={columnStyles}>
          <p style={environmentTextStyles}>Environment: {environment}</p> {/* Add the "environment" text and value */}
        </div>
      </div>
      <p>{description}</p>
    </Modal>
  );
};

export default ModalComponent;
