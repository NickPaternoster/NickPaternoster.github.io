import React from 'react';
import '../styles/EducationStyle.css';
import cornellImage from '../images/cornell_a.jpg';
import ucaImage from '../images/uca.jpg';

export default function Education() {
  return (
    <div className="grid-container">
      <div className="about-info">
        <strong style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Doctor of Philosophy in Psychology
        </strong>
        <br />
        Institution: Cornell University <br />
        Minor: Cognitive Science <br />
        Primary Doctoral Advisor: Khena Swallow <br />
        Chair Members: TBA
      </div>

      <div className="about-info">
        <strong style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Bachelor of Science in Computer Science
        </strong>
        Institution: University of Central Arkansas <br />
        Minor: Cognitive Neuroscience <br />
        Primary Undergraduate Advisor: Amrita Puri <br />
        Secondary Undergraduate Advisors: Santani Teng, Kenith Sobel
      </div>

      <div className="image-container-1">
        <img src={cornellImage} alt="Cornell University" />
      </div>

      <div className="image-container-1">
        <img src={ucaImage} alt="University of Central Arkansas" />
      </div>
    </div>
  );
}
