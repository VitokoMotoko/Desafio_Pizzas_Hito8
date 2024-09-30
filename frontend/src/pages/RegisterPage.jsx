import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../assets/CSS/Form.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
    } else {
      await register(email, password);
      alert('Registro exitoso');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar contraseña" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default RegisterPage;