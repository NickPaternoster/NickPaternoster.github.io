import React from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

const ModalComponent = ({ title, description, isOpen, closeModal }) => {
  const customModalStyles = {
    content: {
      width: '50%',
      height: '60%',
      margin: 'auto',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Modal"
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <Button variant="primary" onClick={closeModal}>
        Close
      </Button>
    </Modal>
  );
};

export default ModalComponent;
