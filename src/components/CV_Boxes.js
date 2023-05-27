import React, { useState } from 'react';
import '../styles/CV_BoxesStyle.css';
import ModalComponent from './ModalComponent';
import CircleProgressBar from './CircleProgressBar';

const CV_Boxes = ({ title, description, image, experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBoxClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="cv-box" onClick={handleBoxClick}>
      <div className="box-content">
        <div className="box-title">{title}</div>
        <div className="box-description">{description}</div>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <ModalComponent
              title={title}
              description={description}
              isOpen={isOpen}
              closeModal={closeModal}
            >
              <CircleProgressBar percentage={75} word={experience} />
            </ModalComponent>
          </div>
        </div>
      )}
    </div>
  );
};

export default CV_Boxes;
