import React, { useState, useContext } from 'react';
import Stock from '../Stock/Stock';
import ItemProduct from './ItemProduct';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../services/Context';

const Products = () => {

    const { addToCart, deleteFromCart, total } = useContext(Context)
    const [prod] = useState(Stock)

    return (
        <div className="App">
            <div className="bandeja">
                <div className='tipos-de-producto'>
                    <a href="#">REMERAS</a>
                    <a href="#">HOODIES</a>
                    <a href="#">MANGAS LARGAS</a>
                    <a href="#">CAMPERAS</a>
                    <a href="#">PANTALONES</a>
                    <a href="#">JEANS</a>
                    <a href="#">ACCESORIOS</a>
                </div>
                <hr />
                <section className='Stock'> {prod.map((p, idx) => (
                    <div key={idx}>
                        <ItemProduct item={p}></ItemProduct>
                    </div>
                ))}
                </section>
                <section className='carrito-footer'>
                    <h1>Total Actual: ${total}.00</h1>
                    <br></br>
                    <Link className="verCarrito" to="/carrito">Ver Carrito</Link>
                </section>
            </div>
        </div>
    );
}

export default Products;