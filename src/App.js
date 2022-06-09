import './App.css';
import Products from './component/Products'
import { Route, Routes } from 'react-router-dom';
import Carrito from './component/Carrito';
import { Footer } from './component/Footer';
import { AuthProvider, CarritoContext, CartContext, useCart } from './context/AuthContext';
import { React, useContext } from 'react';

function App() {
  
  return (
      <Routes>
      <Route path='/home' element={<Products />}/>
      <Route path='/pto' element={<Products />}/>
      <Route path='/carrito' element={<Carrito />}/>
      </Routes>
   
  );
}

export default App;
