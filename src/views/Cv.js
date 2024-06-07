import React from 'react';
import Education from './Education';
import Pubs from './Pubs';
import Awards from './Awards';
import Skills from './Skills';
import '../styles/CVStyle.css';

const CVPage = () => {
  return (
    <div id="cv-container">
      <section className="text-resume" id="education">
        <Education />
      </section>
      <section className="text-resume" id="publications">
        <Pubs />
      </section>
      <section className="text-resume" id="awards">
        <Awards />
      </section>
      <section className="text-resume" id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default CVPage;
