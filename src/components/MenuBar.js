import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MenuBarStyle from '../styles/MenuBarStyle.css';

function MenuBar(props) {
  const { id } = useParams();

  return (
    <nav>
      <ul id="menu">
        <li className="name"><NavLink exact to="/" activeClassName="active">Nickolas Paternoster</NavLink></li> 
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/research" activeClassName="active">Research</NavLink></li>
        <li><NavLink to="/cv" activeClassName="active">CV</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default MenuBar;
