import './App.css';
import Products from './component/Products'
import { Route, Routes } from 'react-router-dom';
import Carrito from './component/Carrito';
import { Footer } from './component/Footer';
import { React} from 'react';
import { Talles } from './component/Talles';
import { Devolucion } from './component/Devolucion';

function App() {
  
  return (
      <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/home' element={<Products />}/>
      <Route path='/carrito' element={<Carrito />}/>
      <Route path='/talles' element={<Talles />}/>
      <Route path='/devolucion' element={<Devolucion />}/>
      </Routes>

  );
}

export default App;
