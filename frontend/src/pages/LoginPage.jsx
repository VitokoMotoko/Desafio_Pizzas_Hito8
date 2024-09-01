import React, { useState } from 'react';
import '../assets/CSS/Form.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Todos los campos son obligatorios');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      alert('Login exitoso');
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