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
      <div className='text-resume'>
        <div className='section-selection'>
          <CV_Button></CV_Button>
          <ResumeSections
            title={"Overview"}
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
          <ResumeSections
            title={"Education"}
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
          <ResumeSections
            title={"Publications & Awards"}
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
          <ResumeSections
            title={"Conferences"}
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
          <ResumeSections
            title={"Skills"}
            setSelectedSection={setSelectedSection}
            selectedSection={selectedSection}
          />
        </div>
      </div>
    </>
  );
}
