import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CardPizza from './CardPizza';
import '../assets/CSS/Home.css';

function Home({ addToCart }) {
  const [pizzas, setPizzas] = useState([]);

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