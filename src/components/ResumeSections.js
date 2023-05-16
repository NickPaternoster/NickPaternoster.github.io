import React, { useState } from 'react';
import '../styles/ResumeSectionsStyle.css';

const ResumeSection = ({ title, setSelectedSection, selectedSection }) => {
  const isSelected = selectedSection === title;

  const handleClick = () => {
    setSelectedSection(title);
  };

  return (
    <div
      className={`resume-section ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="section-content">
        <div className="section-title">{title}</div>
      </div>
    </div>
  );
};

export default ResumeSection;
