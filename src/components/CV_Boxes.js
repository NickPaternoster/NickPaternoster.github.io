import React from 'react';
import '../styles/CV_BoxesStyle.css';

const CV_Boxes = ({ title, description, image }) => {
  const handleClick = () => {
    console.log('Box clicked!');
    // Add your custom click event handling code here
  };

  return (
    <div className="cv-box" onClick={handleClick}>
      <div className="box-content">
        <div className="box-title">{title}</div>
        <div className="box-description">{description}</div>
      </div>
    </div>
  );
};

export default CV_Boxes;
