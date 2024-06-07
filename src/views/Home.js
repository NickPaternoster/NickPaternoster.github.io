import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HomeStyle.css';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../images/back_nn.png'; 

export default function Home() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [shouldFadeIn, setShouldFadeIn] = useState(false);

  useEffect(() => {
    setShouldFadeIn(true);
  }, []);

  return (
    <div className={`home-container ${isHome ? 'home' : ''}`}>
      {isHome && (
        <>
        <img src={backgroundImage} alt="Background" className="centered-image" />
          <div className={`home-text ${shouldFadeIn ? 'fade-in' : ''}`}>
            Nickolas Paternoster 
            <br></br>Ph.D. Student
          </div>
          <div className={`sub-text ${shouldFadeIn ? 'fade-in' : ''}`}>
            Perception, Computation, & Cognition
          </div>
          <div className="nav-buttons">
            <NavLink
              exact
              to="/about"
              className={`button-below-image ${shouldFadeIn ? 'fade-in' : ''}`}
            >
              About Me
            </NavLink>
            <NavLink
              exact
              to="/research"
              className={`button-below-image ${shouldFadeIn ? 'fade-in' : ''}`}
            >
              Research Interest
            </NavLink>
            <NavLink
              exact
              to="/cv"
              className={`button-below-image ${shouldFadeIn ? 'fade-in' : ''}`}
            >
              Curriculum Vitae
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}
