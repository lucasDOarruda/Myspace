import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/solutions">Solutions</Link>
      </nav>
    </header>
  );
}

export default Header;
