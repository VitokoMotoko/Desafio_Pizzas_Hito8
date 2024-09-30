import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import '../assets/CSS/Profile.css';

const Profile = () => {
  const { email, getProfile, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile();
      setProfile(profileData);
    };
    fetchProfile();
  }, [getProfile]);

  const handleLogout = () => {
    logout();
    alert("Sesión cerrada");
    navigate('/');
  };

  return (
    <div className="profile">
      <h2>Perfil de Usuario</h2>
      <p>Email: {email}</p>
      {profile && <p>Nombre: {profile.name}</p>}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;