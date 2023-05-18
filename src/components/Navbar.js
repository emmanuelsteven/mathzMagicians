import React from 'react';
import './calStyles.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navcont">
    <h1 className="navtitle">Math Magicians</h1>
    <div className="nav-ul">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
