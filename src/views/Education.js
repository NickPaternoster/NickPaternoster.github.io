import React from 'react';
import '../styles/EducationStyle.css';
import cornellSeal from '../images/cornell_seal.png'; // Ensure the path is correct
import ucaSeal from '../images/UCA_Seal.png'; // Ensure the path is correct

export default function Education() {
  return (
    <div className="education-container">
      <div className="education-header">Education</div>
      <div className="education-item">
        <img src={cornellSeal} alt="Cornell University Seal" className="education-seal" />
        <div className="text-content">
          <strong className="education-title">
            Doctor of Philosophy in Psychology
          </strong>
          <p>
            Institution: Cornell University <br />
            Minor: Cognitive Science <br />
            Primary Doctoral Advisor: Khena Swallow <br />
            Chair Members: David Field, Nori Jacoby<br />
            Lab: Attention, Memory, and Perception Lab
          </p>
        </div>
      </div>

      <div className="education-item">
        <img src={ucaSeal} alt="University of Central Arkansas Seal" className="education-seal" />
        <div className="text-content">
          <strong className="education-title">
            Bachelor of Science in Computer Science
          </strong>
          <p>
            Institution: University of Central Arkansas <br />
            Minor: Cognitive Neuroscience <br />
            Primary Undergraduate Advisor: Amrita Puri <br />
            Secondary Undergraduate Advisors: Santani Teng, Kenith Sobel<br />
            Lab: Perceptual Cogntive Neuroscience Lab
          </p>
        </div>
      </div>
    </div>
  );
}
