import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.name === pizza.name);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.name === pizza.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, pizza];
      }
    });
  };

  return (
    <div>
      <Navbar total={cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;