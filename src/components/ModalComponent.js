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
    marginTop: '0.5%',
    marginBottom: '5px',
    width: '90%',
    border: '1px solid black'
  };

  const skillLevelTextStyles = {
    width: '100px', // Adjust the width as per your requirement
  };

  const experienceTextStyles = {};

  const environmentTextStyles = {};

  const columnStyles = {
    flex: 1, // Each column takes up equal width
    display: 'flex',
    flexDirection: 'row',
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

  const paragraphStyles = {
    marginTop: '10px', // Adjust the margin as per your requirement
    marginLeft: '10%',
    marginRight: '10%',
  };

  const titleContainerStyles = {
    border: '1px solid black',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  

  const titleStyles = {
    fontWeight: 'bold',
    marginBottom: '0',
  };

  let isFirstTitle = true; // Variable to check if it's the first title

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
      <div style={titleContainerStyles}>
        <h2 style={titleStyles}>{title}</h2>
      </div>
      <div style={skillLevelContainerStyles}>
        <div style={columnStyles}>
          <div style={labelAndCircleStyles}>
            <p style={skillLevelTextStyles}>Proficiency</p>
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
      <div style={paragraphStyles}>
        <p style={titleStyles}>Overview</p>
        <p>
          I have extensive experience with C++. Over the past five years, I have worked on various projects ranging from small applications to large-scale systems using C++. I am proficient in object-oriented programming, data structures, and algorithms in C++. I have successfully implemented complex functionalities and optimized code for performance. Additionally, I am familiar with popular libraries and frameworks such as STL and Boost. My experience with C++ has allowed me to develop robust and efficient software solutions, and I continue to enhance my skills through ongoing learning and practical application.
        </p>
        <p style={titleStyles}>Projects</p>
        <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <li>Project 1: Developed a real-time image processing application using C++ and OpenCV library. Implemented various image enhancement and feature extraction algorithms.</li>
          <li>Project 2: Created a simulation software for modeling and analyzing the behavior of a network using C++ and network simulation libraries.</li>
          <li>Project 3: Contributed to the development of a high-performance game engine using C++ and DirectX graphics library.</li>
        </ul>
      </div>
    </Modal>
  );
};

export default ModalComponent;
