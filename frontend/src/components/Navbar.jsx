import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/Navbar.css';
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert("Sesión cerrada");
    navigate('/'); // Redirige al usuario a la página de inicio
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pizzería Mamma Mia!</h1>
        <Link to="/">🏠 Home</Link>
        {token ? (
          <>
            <Link to="/profile">🔓 Profile</Link>
            <button onClick={handleLogout}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">🔐 Login</Link>
            <Link to="/register">🔐 Register</Link>
          </>
        )}
      </div>
      <div className="navbar-right">
        <Link to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
      </div>
    </nav>
  );
}

export default Navbar;