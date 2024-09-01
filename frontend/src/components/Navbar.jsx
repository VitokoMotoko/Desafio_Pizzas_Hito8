import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/Navbar.css';

const Navbar = ({ total = 0 }) => {
  const token = false; // Cambia esto a `true` para simular que el usuario está autenticado
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí atmbien se puede agregar la lógica para cerrar sesión, como eliminar el token de autenticación
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