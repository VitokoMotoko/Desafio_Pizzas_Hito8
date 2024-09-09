import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import '../assets/CSS/Home.css';
import { CartContext } from '../context/CartContext';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pizzas')
      .then(response => {
        setPizzas(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="cards-container">
        {pizzas.map((pizza, index) => (
          <div key={index} className="card-wrapper">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;