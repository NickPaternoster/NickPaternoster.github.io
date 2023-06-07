import React from 'react';
import '../styles/EducationStyle.css';

export default function Education() {
  return (
    <div className="grid-container">
      <div className="about-info phd-background">
        <div className="text-content">
          <strong style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
            Doctor of Philosophy in Psychology
          </strong>
          <br />
          Institution: Cornell University <br />
          Minor: Cognitive Science <br />
          Primary Doctoral Advisor: Khena Swallow <br />
          Chair Members: TBA
        </div>
      </div>

      <div className="about-info uca-background">
        <div className="text-content">
          <strong style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
            Bachelor of Science in Computer Science
          </strong>
          Institution: University of Central Arkansas <br />
          Minor: Cognitive Neuroscience <br />
          Primary Undergraduate Advisor: Amrita Puri <br />
          Secondary Undergraduate Advisors: Santani Teng, Kenith Sobel
        </div>
      </div>
    </div>
  );
}
