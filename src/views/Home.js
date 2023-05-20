import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HomeStyle.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`home-container ${isHome ? 'home' : ''}`}>
      {isHome && (
        <>
          <div className="home-text">PhD Student: Cornell University</div>
          <div className="sub-text">Cognition, Computation, Perception</div>
        </>
      )}
      <img src="bfw2.png" alt="Stock intro" className="centered-image" />
      {isHome && (
              <NavLink exact to="/about" className="button-below-image">
                <button className="button-below-image">Learn More</button>
            </NavLink>
      )}
    </div>
  );
}
