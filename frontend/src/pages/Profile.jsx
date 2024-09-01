import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/Profile.css';

const Profile = () => {
  const email = "usuario@example.com"; // Email estático por ahora
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar sesión, como eliminar el token de autenticación
    alert("Sesión cerrada");
    navigate('/'); // Redirige al usuario a la página de inicio
  };

  return (
    <div className="profile">
      <h2>Perfil de Usuario</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;