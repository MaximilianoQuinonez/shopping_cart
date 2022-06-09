import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import Stock from '../Stock/Stock';
import Carrito from './Carrito';
import NavBar from './NavBar';

const Products = () => {

    const [cart, setCart] = useState([])
    const prod = Stock

    //Para agregar al carrito
    const addToCart = (id) => {
        const idxProd = prod.findIndex(e => e.id === id)
        const itemCart = prod[idxProd]
        console.log('add', id)
        //Para agregar si el carrito esta vacío
        if (!cart === []) {
            itemCart.cant = 1
            itemCart.subtotal = itemCart.cant * itemCart.precio
            console.log('itemcart', itemCart)
            setCart([...cart, itemCart]);
        }
        const idx = cart.findIndex(e => e.id === id)
        console.log('idx', idx)
        //Para agregar el primer item de un producto
        if (idx === -1) {
            itemCart.cant = 1
            itemCart.subtotal = itemCart.cant * itemCart.precio
            console.log('itemcart', itemCart)
            setCart([...cart, itemCart]);
        } else { //Para sumar unidades al producto
            const cartCart = cart
            cartCart[idx].cant++
            itemCart.subtotal = itemCart.cant * itemCart.precio
            setCart([...cartCart])
        }
        console.log('cart:', cart.length, cart)
    }

    //para borrar productos del carrito
    const deleteFromCart = (id) => {
        //Primero busca si existe
        const aux = cart
        const indice = cart.findIndex(e => (e.id === id))
        //Si hay 1 solo elemento borra el item
        if (aux[indice].cant < 2) {
            aux.splice(indice, 1);
            console.log('auxxx', aux)
            setCart([...aux])
            console.log(cart);
        } else { //Si hay más de 1, reduce la cant en 1
            aux[indice].cant = aux[indice].cant - 1;
            aux[indice].subtotal = aux[indice].cant * aux[indice].precio;
            setCart([...aux])
            console.log(cart);
        }
    }

    //Limpiar carrito
    const clearCart = () => {
        const aux = [];
        console.log('vaciar1',aux)
        setCart([...aux]);
        console.log('estado final cart',cart);
    }

    return (
        <div className="App">
            <NavBar></NavBar>
            <h1>Lista de Productos</h1>
            <div className='Stock'> {prod.map((p) => (
                <div className='producto' key={p.id}>
                    <p>{p.nombre}</p>
                    <img src={p.imagen} alt="imagen del producto" />
                    <p>Precio Unitario: ${p.precio}.00</p>
                    <button onClick={() => addToCart(p.id)}>Agregar</button>
                    <br />
                </div>
            ))}
            </div>

            <div className='Carrito'>
                <p>Carrito</p>

                <button onClick={() => clearCart()}>Vaciar carrito</button>
                <br />
                <br />
                {<div className='carrito-contenedor'> {cart.map((c, idx) => (
                    <div className='Item' key={idx}>
                        <p>Producto: {c.nombre}</p>
                        <p>Cantidad: {c.cant}</p>
                        <p>Precio Unitario: ${c.precio}.00</p>
                        <p>Subtotal: ${c.subtotal}.00</p>
                        <button onClick={() => deleteFromCart(c.id)}>Borrar</button>
                    </div>
                ))}
                </div>}
            </div>
        </div>
    );
}

export default Products;