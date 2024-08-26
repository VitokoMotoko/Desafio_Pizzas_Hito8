import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => {
        setPizza(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  return (
    <div>
      {pizza && (
        <div>
          <h2>{pizza.name}</h2>
          <img src={pizza.img} alt={pizza.name} />
          <p>{pizza.description}</p>
          <p>Precio: ${pizza.price}</p>
          <p>Ingredientes:</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button>Añadir al carrito</button>
        </div>
      )}
    </div>
  );
};

export default Pizza;