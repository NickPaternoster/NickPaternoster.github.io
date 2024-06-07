import React from 'react';
import ResearchBox from '../components/ResearchBox.js';
import '../styles/ResearchStyle.css'; // Importing the style sheet

export default function Research() {
  const boxes = [
    { image: 'ensemble.png', title: 'The Locus Coeruleus, Norepinephrine, and Vision' },
    { image: 'ensemble.png', title: 'Modeling Event Segmentation' },
    { image: 'blur1.png', title: 'Human Echolocation' },
    { image: 'semperc.png', title: 'The Size Congruity Effect' },
    { image: 'ensemble.png', title: 'Semantic Ensembles' }
  ];

  return (
    <div className="research-container">  
      {boxes.map((box, index) => (
        <ResearchBox key={index} image={box.image} title={box.title} />
      ))}
    </div>
  );
}
