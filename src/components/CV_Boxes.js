import React, { useState } from 'react';
import '../styles/CV_BoxesStyle.css';
import ModalComponent from './ModalComponent';
import CircleProgressBar from './CircleProgressBar';

const CV_Boxes = ({ title, description, image, experience, percentage, environment }) => {
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
        <img className="box-image" src={image} />
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <ModalComponent
              title={title}
              description={description}
              isOpen={isOpen}
              closeModal={closeModal}
              experience={experience} // Pass the experience prop
              environment= {environment} // Pass the environment prop
            >
              <CircleProgressBar percentage={percentage} word={experience} />
            </ModalComponent>
          </div>
        </div>
      )}
    </div>
  );
};

export default CV_Boxes;
