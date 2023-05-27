import React from 'react';
import CVBoxes from '../components/CV_Boxes';

export default function Skills() {
  return (
    <div className="cv-box-container">
      <CVBoxes title="C++" percentage={100} experience="5 Years" environment="Academia"/>
      <CVBoxes title="C#" percentage={100} experience="3 Years" environment="Industry"/>
      <CVBoxes title="Python" image = "python.png" percentage={80} experience="2 Years" environment="Academia"/>
      <CVBoxes title="Machine Learning" percentage={75} experience="2.5 Years" environment="Academia"/>
      <CVBoxes title="MATLAB" percentage={60} experience="3 Years" environment="Academia"/>
      <CVBoxes title="Other Technical Skills" percentage={50} experience="8 Years" environment="Both"/>
      {/* Add more CV_Boxes components as needed */}
    </div>
  );
}
