import React from 'react';
import '../styles/LoadingStyle.css';

function Loading() {
  const totalWaves = 20;
  const midPoint = totalWaves / 2;
  const waves = Array.from({ length: totalWaves }, (_, i) => {
    const scaleBase = 0.5;  // Minimum scale
    const scaleRange = 1;  // Maximum dynamic range
    const scale = scaleBase + Math.abs(Math.sin((i / totalWaves) * Math.PI)) * scaleRange;

    return (
      <div
        key={i}
        className="wave"
        style={{
          '--scale': scale,
          '--delay': `-${(totalWaves - i) * 0.075}s` // Set a negative delay to start the animation partway through
        }}
      ></div>
    );
  });

  return (
    <div className="loading-container">
      <div className="loading-spinner">
        {waves}
      </div>
    </div>
  );
}

export default Loading;
