import React from 'react';
import ResearchBox from '../components/ResearchBox.js';

export default function Research() {
  const boxes = [
    { image: 'blur1.png', title: 'Human Echolocation' },
    { image: 'semperc.png', title: 'The Size Congruity Effect' },
    { image: 'ensemble.png', title: 'Semantic Ensembles' }
  ];

  return (
    <div>
      {boxes.map((box, index) => (
        <ResearchBox key={index} image={box.image} title={box.title} />
      ))}
    </div>
  );
}
