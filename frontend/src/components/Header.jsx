import React from 'react';
import '../assets/CSS/Header.css';

function Header() {
  return (
    <div className="header">
      <img className="header-image" src="../src/assets/img/image_pizzas.png" alt="Fondo" />
      <div className="header-content">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
}

export default Header;