import React from 'react';
import '../styles/EducationStyle.css';
import cornellSeal from '../images/cornell_seal.png';
import ucaSeal from '../images/UCA_Seal.png';

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
            Institution: <a href="https://psychology.cornell.edu" className="hover-link" target="_blank">Cornell University</a> <br />
            Minor: <a href="https://cogsci.cornell.edu" className="hover-link" target="_blank">Cognitive Science</a> <br />
            Primary Doctoral Advisor: <a href="https://psychology.cornell.edu/khena-m-swallow" className="hover-link" target="_blank">Khena Swallow</a> <br />
            Chair Members: <a href="https://psychology.cornell.edu/david-j-field" className="hover-link" target="_blank">David Field</a>, <a href="https://nbb.cornell.edu/madineh-sedigh-sarvestani" className="hover-link" target="_blank">Madineh Sarvestani</a><br />
            Lab: <a href="https://amp-lab.psych.cornell.edu/" className="hover-link" target="_blank">Attention, Memory, and Perception Lab</a>
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
            Institution: <a href="https://uca.edu/cse/bscs-degree-program/" className="hover-link" target="_blank">University of Central Arkansas</a> <br />
            Minor: <a href="https://uca.edu/psychology/files/2019/11/CogNeuro-checksheet-11-7-19.pdf" className="hover-link" target="_blank">Cognitive Neuroscience</a> <br />
            Primary Undergraduate Advisor: <a href="https://uca.edu/biology/facultystaff/amrita-puri/" className="hover-link" target="_blank">Amrita Puri</a> <br />
            Secondary Undergraduate Advisors: <a href="https://www.ski.org/directory/santani-teng" className="hover-link" target="_blank">Santani Teng</a>, <a href="https://uca.edu/psychology/facultystaff/ken-sobel/" className="hover-link" target="_blank">Kenith Sobel</a><br />
            Lab: Perceptual Cognitive Neuroscience Lab
          </p>
        </div>
      </div>
    </div>
  );
}
