import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav-bar">
    <div className="nav-brand">
      <Link to="/bookstore-cms/"><h1>Bookstore CMS</h1></Link>
    </div>
    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/bookstore-cms/">BOOKS</Link>
      </li>
      <li>|</li>
      <li>
        <Link className="nav-link" to="/bookstore-cms/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
