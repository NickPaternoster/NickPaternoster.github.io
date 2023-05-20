import React from 'react';
import '../styles/CVStyle.css';

export default function About() {
  return (
    <>
      <div className="degree-title">
        Doctor of Philosophy in Psychology
      </div>
      <div className="about-info">
        Institution: Cornell University
      </div>
      <div className="about-info">
        Minor: Cognitive Science
      </div>
      <div className="about-info">
        Primary Doctoral Advisor: Khena Swallow
      </div>

      {/* Add an empty div for spacing */}
      <div className="degree-spacing"></div>

      <div className="degree-title">
        Bachelor of Science in Computer Science
      </div>
      <div className="about-info">
        Institution: University of Central Arkansas
      </div>
      <div className="about-info">
        Minor: Cognitive Neuroscience
      </div>
      <div className="about-info">
        Primary Undergraduate Advisor: Amrita Puri
      </div>
      <div className="about-info">
        Secondary Undergraduate Advisors: Santani Teng, Kenith Sobel
      </div>
    </>
  );
}
