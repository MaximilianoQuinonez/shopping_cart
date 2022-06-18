import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Stock from '../Stock/Stock';
import Carrito from './Carrito';
import swal from 'sweetalert';
import ItemProduct from './ItemProduct';
import { Link, useNavigate } from 'react-router-dom'

const Products = () => {

    const [cart, setCart] = useState([])
    const [prod] = useState(Stock)

    //Limpiar carrito
    const clearCart = () => {
        setCart([]);
        console.log('estado final cart', cart);
    }

    const mensajeAgregar = () => {
        swal("Se agrego correctamente el producto al carrito.")
    }

    return (
        <div className="App">
            <div className="bandeja">
                <h1>Lista de Productos</h1>
                <hr />
                <div className='Stock'> {prod.map((p, idx) => (
                    <div key={idx}>
                        <ItemProduct item={p}></ItemProduct>
                    </div>
                ))}
                </div>
                <div className='carrito-footer'>
                    <h1>Total Actual: $ .00</h1>
                    <Link to="/carrito">Ver Carrito</Link>
                </div>
            </div>
        </div>
    );
}

export default Products;