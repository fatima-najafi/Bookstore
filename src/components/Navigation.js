import React from 'react';
import { Link } from 'react-router-dom';
import './styling/Navigation.css';

const Navigation = () => (
  <nav className="nav-bar">
    <div className="nav-item">
      <Link to="/bookstore-cms/">
        <h1>Bookstore CMS</h1>
      </Link>
    </div>
    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/bookstore-cms/">
          BOOKS
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link className="nav-link" to="/bookstore-cms/categories">
          CATEGORIES
        </Link>
      </li>
    </ul>
    <div className="icon">
      <img
        src="https://img.icons8.com/ios-filled/0290ff/30/user.png"
        alt="user"
      />
    </div>
  </nav>
);

export default Navigation;
