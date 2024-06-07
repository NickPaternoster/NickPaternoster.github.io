import React from 'react';
import Education from './Education';
import Pubs from './Pubs';
import Awards from './Awards';
import Skills from './Skills';
import '../styles/CVStyle.css';

const CVPage = () => {
  return (
    <div>
      <section id="education">
        <Education />
      </section>
      <section id="publications">
        <Pubs />
      </section>
      <section id="awards">
        <Awards />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default CVPage;
