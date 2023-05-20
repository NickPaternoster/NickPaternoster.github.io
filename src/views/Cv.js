import React, { useState } from 'react';
import '../styles/CVStyle.css';
import ResumeSections from '../components/ResumeSections.js';
import CV_Button from '../components/CV_Button.js';

export default function Cv() {
  const [selectedSection, setSelectedSection] = useState(null);

  // Set the background color of the body element to black
  document.body.style.backgroundColor = 'black';

  return (
    <>
    </>
  );
}
