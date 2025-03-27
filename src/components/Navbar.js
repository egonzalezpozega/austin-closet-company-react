import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
// import logo from '../assets/images/logo.png'; // Optional

const Navbar = () => {
  // Basic state for mobile menu toggle (optional)
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* <img src={logo} alt="Austin Closet Co Logo" className="navbar-icon" /> */}
          Austin Closet Co
        </Link>

        {/* Mobile Menu Icon (Example) */}
        <div className="menu-icon" onClick={handleClick}>
          {/* Basic hamburger/close icon logic */}
          {click ? '✕' : '☰'}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
              end // Use 'end' for the base path "/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/gallery"
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;