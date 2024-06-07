import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/MenuBarStyle.css';
import homeIcon from '../images/home.png';
import infoIcon from '../images/information-button.png';
import brainIcon from '../images/brain.png';
import resumeIcon from '../images/resume.png';
import emailIcon from '../images/email.png';
import teachingIcon from '../images/teaching.png';

function MenuBar() {
  const location = useLocation();

  const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);
  const [isResearchMenuOpen, setIsResearchMenuOpen] = useState(false);
  const [isTeachingMenuOpen, setIsTeachingMenuOpen] = useState(false);

  const toggleCVMenu = (e) => {
    e.preventDefault();
    setIsCVMenuOpen(prevState => !prevState);
    setIsResearchMenuOpen(false); 
    setIsTeachingMenuOpen(false);
  };

  const toggleResearchMenu = (e) => {
    e.preventDefault();
    setIsResearchMenuOpen(prevState => !prevState);
    setIsCVMenuOpen(false);
    setIsTeachingMenuOpen(false);
  };

  const toggleTeachingMenu = (e) => {
    e.preventDefault();
    setIsTeachingMenuOpen(prevState => !prevState);
    setIsCVMenuOpen(false);
    setIsResearchMenuOpen(false);
  };

  const handleSubMenuClick = () => {
    setIsCVMenuOpen(false);
    setIsResearchMenuOpen(false);
    setIsTeachingMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isActiveSubLink = (subPaths) => {
    return subPaths.includes(location.pathname);
  };

  return (
    <nav>
      <ul id="menu">
        <li>
          <NavLink exact to="/" className={isActiveLink('/') ? 'active' : ''}>
            <img src={homeIcon} alt="Icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" className={isActiveLink('/about') ? 'active' : ''}>
            <img src={infoIcon} alt="Icon" /> About
          </NavLink>
        </li>
        <li className={`dropdown ${isResearchMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={toggleResearchMenu} className={isActiveSubLink(['/research/researchinterest', '/research/projects', '/research/teachingstatement']) ? 'active' : ''}>
            <img src={brainIcon} alt="Icon" /> Research
            <span className="dropdown-icon">&#9662;</span>
          </a>
          <ul className="dropdown-menu" onClick={handleSubMenuClick}>
            <li>
              <NavLink to="/research/researchinterest" className={isActiveLink('/research/researchinterest') ? 'active' : ''}>Research Interest</NavLink>
            </li>
            <li>
              <NavLink to="/research/projects" className={isActiveLink('/research/projects') ? 'active' : ''}>Projects</NavLink>
            </li>
          </ul>
        </li>

        <li className={`dropdown ${isTeachingMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={toggleTeachingMenu} className={isActiveSubLink(['/teaching/teachingstatement', '/teaching/experience']) ? 'active' : ''}>
            <img src={teachingIcon} alt="Icon" /> Teaching & Outreach
            <span className="dropdown-icon">&#9662;</span>
          </a>
          <ul className="dropdown-menu" onClick={handleSubMenuClick}>
            <li>
              <NavLink to="/teaching/teachingstatement" className={isActiveLink('/teaching/teachingstatement') ? 'active' : ''}>Teaching Statement</NavLink>
            </li>
            <li>
              <NavLink to="/teaching/experience" className={isActiveLink('/teaching/experience') ? 'active' : ''}>Experience</NavLink>
            </li>
          </ul>
        </li>

        <li className={`dropdown ${isCVMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={toggleCVMenu} className={isActiveSubLink(['/cv#education', '/cv#publications', '/cv#awards', '/cv#skills']) ? 'active' : ''}>
            <img src={resumeIcon} alt="Icon" /> CV
            <span className="dropdown-icon">&#9662;</span>
          </a>
          <ul className="dropdown-menu" onClick={handleSubMenuClick}>
            <li>
              <HashLink smooth to="/cv#education" className={isActiveLink('/cv#education') ? 'active' : ''}>Education</HashLink>
            </li>
            <li>
              <HashLink smooth to="/cv#publications" className={isActiveLink('/cv#publications') ? 'active' : ''}>Publications</HashLink>
            </li>
            <li>
              <HashLink smooth to="/cv#awards" className={isActiveLink('/cv#awards') ? 'active' : ''}>Awards & Conferences</HashLink>
            </li>
            <li>
              <HashLink smooth to="/cv#skills" className={isActiveLink('/cv#skills') ? 'active' : ''}>Skills</HashLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/contact" className={isActiveLink('/contact') ? 'active' : ''}>
            <img src={emailIcon} alt="Icon" /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
