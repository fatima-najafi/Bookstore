import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="navbar">
    <div>
      <Link to="/bookstore-cms/">
        <h1>Bookstore CMS</h1>
      </Link>
    </div>
    <ul className="nav-item">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
