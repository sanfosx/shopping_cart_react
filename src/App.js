
import React from "react";
import Provider from './contexts/CartContext';
import Carrito from './components/shoppingCart/ShoppingCart';
import Products from "./components/products/Products";
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Provider>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/cart' element={<Carrito/>}/>
    </Routes>
  </Provider>
);

export default App;