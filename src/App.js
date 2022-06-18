import './App.css';
import Products from './component/Products'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Carrito from './component/Carrito';
import { Footer } from './component/Footer';
import { React } from 'react';
import { Talles } from './component/Talles';
import { Devolucion } from './component/Devolucion';
import NavBar from './component/NavBar';
import { ContextWrapper } from './services/Context';

function App() {

  return (
    <ContextWrapper>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/home' element={<Products />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/talles' element={<Talles />} />
          <Route path='/devolucion' element={<Devolucion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextWrapper>
  );
}

export default App;
