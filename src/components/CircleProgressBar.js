import React, { useEffect, useState } from 'react';
import '../styles/CircleProgressBar.css';

const CircleProgressBar = ({ percentage, word }) => {
  const [radius, setRadius] = useState(20);
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentage / 110) * circumference;
  const strokeWidth = 2; // Adjust the stroke width

  useEffect(() => {
    const handleResize = () => {
      const newRadius = Math.min(20, window.innerWidth * 0.03);
      setRadius(newRadius);
    };

    handleResize(); // Initial calculation on component mount

    window.addEventListener('resize', handleResize); // Update radius on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener on component unmount
    };
  }, []);

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
        transform={`rotate(0 ${radius} ${radius})`} // Modified transform
      />
    </svg>
  );
};

export default CircleProgressBar;
