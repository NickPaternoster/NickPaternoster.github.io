import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import '../styles/MenuBarStyle.css';
import homeIcon from '../images/home.png';
import infoIcon from '../images/information-button.png';
import brainIcon from '../images/brain.png';
import resumeIcon from '../images/resume.png';
import emailIcon from '../images/email.png';

function MenuBar(props) {
  const { id } = useParams();
  const location = useLocation();

  const activeLinkStyle = {
    textDecoration: 'none',
  };

  // State to track the visibility of the CV dropdown menu
  const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);
  const [isResearchMenuOpen, setIsResearchMenuOpen] = useState(false);

  // Function to toggle the visibility of the CV dropdown menu
  const toggleCVMenu = () => {
    setIsCVMenuOpen(prevState => !prevState);
  };

  const toggleResearchMenu = () => {
    setIsResearchMenuOpen(prevState => !prevState);
  };
  // Function to check if the link should be active
  const isActiveLink = (path) => {
    return path === '/' && id && location.pathname !== '/'; // Exclude "Nickolas Paternoster" link
  };

  return (
    <nav>
      <ul id="menu">
        <li className="name">
          <NavLink exact to="/" activeClassName={isActiveLink('/') ? '' : 'active'} style={activeLinkStyle}>
            Nickolas Paternoster
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <img src={homeIcon} alt="Icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="active">
            <img src={infoIcon} alt="Icon" /> About
          </NavLink>
        </li>
        <li className={`dropdown ${isResearchMenuOpen ? 'open' : ''}`}>
          <NavLink to="/research" activeClassName="active" onClick={toggleResearchMenu}>
            <img src={brainIcon} alt="Icon" /> Research
            <span className="dropdown-icon">&#9662;</span>
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/research/topic1" activeClassName="active">Topic 1</NavLink>
            </li>
            <li>
              <NavLink to="/research/topic2" activeClassName="active">Topic 2</NavLink>
            </li>
            <li>
              <NavLink to="/research/topic3" activeClassName="active">Topic 3</NavLink>
            </li>
          </ul>
        </li>
        <li className={`dropdown ${isCVMenuOpen ? 'open' : ''}`}>
          <NavLink to="/cv" activeClassName="active" onClick={toggleCVMenu}>
            <img src={resumeIcon} alt="Icon" /> CV
            <span className="dropdown-icon">&#9662;</span>
          </NavLink>
          <ul className="dropdown-menu">
          <li>
              <NavLink to="/cv" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cv/education" activeClassName="active">Education</NavLink>
            </li>
            <li>
              <NavLink to="/cv/pubs" activeClassName="active">Publications</NavLink>
            </li>
            <li>
              <NavLink to="/cv/awards" activeClassName="active">Awards & Conferences</NavLink>
            </li>
            <li>
              <NavLink to="/cv/skills" activeClassName="active">Skills</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            <img src={emailIcon} alt="Icon" /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
