import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Navbar.css';

const Navbar = ({ total = 0 }) => {
  const token = false;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pizzería Mamma Mia!</h1>
        <Link to="/">🏠 Home</Link>
        {token ? (
          <>
            <Link to="/profile">🔓 Profile</Link>
            <Link to="/logout">🔒 Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">🔐 Login</Link>
            <Link to="/register">🔐 Register</Link>
          </>
        )}
      </div>
      <div className="navbar-right">
        <button>🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
  );
}

export default Navbar;