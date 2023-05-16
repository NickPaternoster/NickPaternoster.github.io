import React from 'react'
import CVStyle from '../styles/CVStyle.css';
import ResumeSections from '../components/ResumeSections.js';
import CV_Button from '../components/CV_Button.js';

export default function Cv() {
  // Set the background color of the body element to black
  document.body.style.backgroundColor = 'black';

  return (
    <>
    <div className='text-resume'>
      <div className='section-selection'>
        <CV_Button></CV_Button>
        <ResumeSections title={"Overview"} />
        <ResumeSections title={"Education"} />
        <ResumeSections title={"Publications"} />
        <ResumeSections title={"Conferences"} />
        <ResumeSections title={"Skills"} />
      </div>
      </div>
    </>
  )
}
