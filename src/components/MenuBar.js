import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MenuBarStyle from '../styles/MenuBarStyle.css';

function MenuBar(props) {
  const { id } = useParams();

  const activeLinkStyle = {
    textDecoration: 'none',
  };

  // State to track the visibility of the CV dropdown menu
  const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);

  // Function to toggle the visibility of the CV dropdown menu
  const toggleCVMenu = () => {
    setIsCVMenuOpen(!isCVMenuOpen);
  };
  
  return (
    <nav>
      <ul id="menu">
        <li className="name">
          <NavLink exact to="/" activeClassName="active"> Nickolas Paternoster
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <img src="home.png" alt="Icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="active">
            <img src="information-button.png" alt="Icon" /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/research" activeClassName="active">
            <img src="brain.png" alt="Icon" /> Research
          </NavLink>
        </li>
        <li className={`dropdown ${isCVMenuOpen ? 'open' : ''}`}>
          <NavLink to="/cv" activeClassName="active" onClick={toggleCVMenu}>
            <img src="resume.png" alt="Icon" /> CV
            <span className="dropdown-icon">&#9662;</span>
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/cv/education" activeClassName="active">Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/cv/pubs" activeClassName="active">Publications & Awards
              </NavLink>
            </li>
            <li>
              <NavLink to="/cv/conferences" activeClassName="active"> Conferences
              </NavLink>
            </li>
            <li>
              <NavLink to="/cv/skills" activeClassName="active"> Skills
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <div className="contact-line"></div> {/* Add the line element */}
      <ul id="menu">
        <li>
          <NavLink to="/contact" activeClassName="active">
            <img src="email.png" alt="Icon" /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
