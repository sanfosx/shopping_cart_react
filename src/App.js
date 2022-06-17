
import React from "react";
import Carrito from './components/shoppingCart/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import CartProvider from "./contexts/CartContext";
import Home from "./components/home/Home";
import styled from "styled-components";
import Images from '../src/assets/images.jsx'

const App = () => (
  <CartProvider>
     <DivApp >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Carrito/>}/>
      </Routes>
    </DivApp>
  </CartProvider>
);

export default App;

const DivApp= styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: url(${Images.backgroundImg});
  background-repeat: no-repeat;
  background-size:100%;
  height:100vh;
  padding:30px;

  @media (max-width: 990px) {
    height:100%
  }


`;