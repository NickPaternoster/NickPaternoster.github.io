import React from 'react';
import ResearchBox from '../components/ResearchBox.js';

export default function Research() {
  const boxes = [
    { image: 'blur.png', title: 'Human Echolocation' },
    { image: 'image2.jpg', title: 'Interaction of Semantic and Perceptual Information' },
    { image: 'image3.jpg', title: 'Semantic Ensembles' }
  ];

  return (
    <div>
      {boxes.map((box, index) => (
        <ResearchBox key={index} image={box.image} title={box.title} />
      ))}
    </div>
  );
}
