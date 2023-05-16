import React from 'react';
import '../styles/ResumeSectionsStyle.css';

const Button = ({ label, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      Download CV
    </button>
  );
};

export default Button;
