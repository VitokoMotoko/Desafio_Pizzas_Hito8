import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import '../assets/CSS/Form.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Todos los campos son obligatorios');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      await login(email, password);
      alert('Login exitoso');
      navigate('/profile'); // Redirige al perfil del usuario después de un login exitoso
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default LoginPage;