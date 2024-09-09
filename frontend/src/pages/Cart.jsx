import React, { useContext } from 'react';
import '../assets/CSS/Cart.css';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.map((pizza, index) => (
        <div key={index} className="cart-item">
          <img src={pizza.img} alt={pizza.name} />
          <span>{pizza.name}</span>
          <span>${pizza.price}</span>
          <div>
            <button onClick={() => decreaseQuantity(index)} disabled={pizza.quantity === 0}>-</button>
            <span>{pizza.quantity}</span>
            <button onClick={() => increaseQuantity(index)}>+</button>
          </div>
        </div>
      ))}
      <h3 className="cart-total">Total: ${total.toLocaleString()}</h3>
      <button className="cart-checkout">Pagar</button>
    </div>
  );
}

export default Cart;