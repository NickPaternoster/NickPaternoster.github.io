import React, { useState } from 'react';
import '../styles/CV_BoxesStyle.css';
import ModalComponent from './ModalComponent';

const CV_Boxes = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBoxClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="cv-box">
      <div className="box-content" onClick={handleBoxClick}>
        <div className="box-title">{title}</div>
        <div className="box-description">{description}</div>
      </div>

      <ModalComponent
        title={title}
        description={description}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default CV_Boxes;
