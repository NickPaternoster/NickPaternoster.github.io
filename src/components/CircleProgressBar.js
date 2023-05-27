import React from 'react';
import '../styles/CircleProgressBar.css';

const CircleProgressBar = ({ percentage, word }) => {
  const radius = 40; // Adjust the radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentage / 100) * circumference;
  const strokeWidth = 2; // Adjust the stroke width

  return (
    <svg className="circle-progress" width={radius * 2} height={radius * 2}>
      <circle
        className="circle-progress-background"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth} // Adjust the radius to leave space for the stroke width
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
      />
      <circle
        className="circle-progress-bar"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth} // Adjust the radius to leave space for the stroke width
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={progressOffset}
      />
      <text
        className="circle-progress-text"
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {word}
      </text>
    </svg>
  );
};

export default CircleProgressBar;
