import React from 'react';
import '../assets/CSS/CardPizza.css';

const ingredientEmojis = {
  mozzarella: '🧀',
  tomates: '🍅',
  jamón: '🥓',
  choricillo: '🌭',
  salame: '🍖',
  orégano: '🌿',
  aceitunas: '🫒',
  champiñones: '🍄',
  bacon: '🥓',
  'tomates cherry': '🍅',
  'pollo grillé': '🍗',
  pimientos: '🌶️'
};

function CardPizza({ name, price, ingredients, img, addToCart }) {
  const pizza = { name, price, ingredients, img, quantity: 1 };

  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <hr />
        <p className="card-text">Ingredientes:</p>
        <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredientEmojis[ingredient]} {ingredient}
            </li>
          ))}
        </ul>
        <hr />
        <p className="card-text text-center mt-2">Precio: ${price.toLocaleString()}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">
            Ver Más
            <img src="/src/assets/img/ojos.png" alt="Ver más" style={{ width: '20px', marginLeft: '5px' }} />
          </button>
          <button className="btn btn-dark" onClick={() => addToCart(pizza)}>
            Añadir
            <img src="/src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;