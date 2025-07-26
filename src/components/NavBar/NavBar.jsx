import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Book Explorer</h1>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Search</NavLink>
        <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
