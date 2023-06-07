import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HomeStyle.css';
import { NavLink } from 'react-router-dom';

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
          <div className={`home-text ${shouldFadeIn ? 'fade-in' : ''}`}>
            Ph.D. Student: Cornell University
          </div>
          <div className={`sub-text ${shouldFadeIn ? 'fade-in' : ''}`}>
            Cognition, Computation, Perception
          </div>
          <NavLink
            exact
            to="/about"
            className={`button-below-image ${
              shouldFadeIn ? 'fade-in' : ''
            }`}
          >
            Learn More
          </NavLink>
        </>
      )}
    </div>
  );
}
