import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Stock from '../Stock/Stock';
import NavBar from './NavBar';
import Products from './Products';

const Carrito = (props) => {
    console.log(props.carrito)
    const [cart, setCart] = useState([])
    setCart(props.cart)
    const prod = Products

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

    //para borrar del carrito
    const deleteFromCart = (id) => {
        //Primero busca si existe
        const aux = cart
        const indice = cart.findIndex(e => (e.id === id))
        //Si hay 1 solo elemento borra el item
        if (aux[indice].cant < 2) {
            aux.splice(indice, 1);
            console.log('auxxx',aux)
            setCart([...aux])
            console.log(cart);
        } else { //Si hay más de 1, reduce la cant en 1
            aux[indice].cant = aux[indice].cant - 1;
            aux[indice].subtotal = aux[indice].cant * aux[indice].precio;
            setCart([...aux])
            console.log(cart);
        }
    }


    return (
        <div className="App">
            <NavBar></NavBar>

            <div className='Carrito'>
                <p>Carrito</p>
                <button>Vaciar carrito</button>
                <br />
                <br />
                <div className='carrito-contenedor'> {cart.map((c, idx) => (
                    <div className='Item' key={idx}>
                        <p>Producto: {c.nombre}</p>
                        <p>Cantidad: {c.cant}</p>
                        <p>Precio Unitario: ${c.precio}.00</p>
                        <p>Subtotal: ${c.subtotal}.00</p>
                        <button onClick={() => deleteFromCart(c.id)}>borrar</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Carrito;