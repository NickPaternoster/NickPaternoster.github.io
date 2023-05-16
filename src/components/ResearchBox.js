import React from 'react';
import '../styles/ResearchBoxStyle.css';

const ResearchBox = ({ image, title }) => {
  const handleClick = () => {
    console.log('Box clicked!');
    // Add your custom click event handling code here
  };

  return (
    <div className="research-box" onClick={handleClick}>
      <div className="box-content">
        <img className="research-image" src={image} alt="Research" />
        <div className="words">{title}</div>
      </div>
    </div>
  );
};

export default ResearchBox;
