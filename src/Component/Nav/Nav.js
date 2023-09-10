import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="hamburger" onClick={handleMenuToggle}>
          <span>-</span>
          <span>-</span>
          <span></span>
        </div>
        <Link to="/" className="logo">Shersher booking</Link>
        
        <ul className={`link ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/">
          <li className="linkItem" onClick={handleMenuToggle}>
              Home
          </li>
              </Link>
            <Link to="/list">
          <li className="linkItem" onClick={handleMenuToggle}>
              List
          </li>
              </Link>
            <Link to="/hotel">
          <li className="linkItem" onClick={handleMenuToggle}>
              Hotel
          </li>
              </Link>
        </ul>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;