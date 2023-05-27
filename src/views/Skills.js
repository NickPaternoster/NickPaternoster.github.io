import React from 'react';
import CVBoxes from '../components/CV_Boxes';

export default function Skills() {
  return (
    <div className="cv-box-container">
      <CVBoxes title="Python" experience = "skilled"/>
      <CVBoxes title="C++" />
      <CVBoxes title="MATLAB" />
      <CVBoxes title="C#" />
      <CVBoxes title="SQL" />
      <CVBoxes title="Machine Learning" />
      <CVBoxes title="Eye Tracking" />
      <CVBoxes title="Other Technical Skills" />
      {/* Add more CV_Boxes components as needed */}
    </div>
  );
}
