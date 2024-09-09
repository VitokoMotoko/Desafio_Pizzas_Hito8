import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/Navbar.css';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false; // Cambiar esto a `true` para simular que el usuario está autenticado
  const navigate = useNavigate();

  const handleLogout = () => {
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