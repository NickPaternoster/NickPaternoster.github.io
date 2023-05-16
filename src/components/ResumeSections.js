import React from 'react';
import '../styles/ResumeSectionsStyle.css';

const ResumeSection = ({ title }) => {
  const handleClick = () => {
    console.log('Box clicked!');
    // Add your custom click event handling code here
  };

  return (
    <div className="resume-section" onClick={handleClick}>
      <div className="section-content">
        <div className="section-title">{title}</div>
      </div>
    </div>
  );
};

export default ResumeSection;
