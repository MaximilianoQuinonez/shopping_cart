import React, { useState, useContext, Fragment } from 'react';
import swal from 'sweetalert';
import { Context } from '../services/Context';
import { Link, useNavigate } from 'react-router-dom'

const Carrito = (props) => {
    const { addToCart, deleteFromCart, cart, setCart, total, clearCart } = useContext(Context)

    //Modal de confirmación
    const confirmarCompra = () => {
        swal({ 
            closeOnClickOutside: false,
            title: 'Carrito Cerrado',
            text: 'Los productos se cargaron correctamente, hace clic en "Continuar" para finalizar la compra.',
            buttons: {
                ok: {
                    text: 'Continuar'
                }
            },
            icon: "info"
        })
    };

    return (
        <div className="bandeja">
            <div className='Carrito'>
                <div className='carrito-header'>
                    <h1>Carrito $: {total}.00</h1>
                    <button onClick={() => clearCart()}>Vaciar Carrito</button>
                </div>
                <br />
                <br />
                {<div className='carrito-contenedor'> {cart.map((c, idx) => (
                    <div className='Item' key={idx}>
                        <p>Producto: {c.nombre}</p>
                        <p>Precio Unitario: ${c.precio}.00</p>
                        <p>Cantidad: {c.cantidad}</p>
                        <p>Subtotal: ${c.cantidad * c.precio}.00</p>
                        <button onClick={() => deleteFromCart(c)}>Borrar</button>
                    </div>
                ))}
                </div>}
                <div className='carrito-footer'>
                    <br />
                    <Link className="verCarrito" to="/ticket" onClick={() => confirmarCompra()}>Confirmar Compra</Link>

                    <br />
                </div>
            </div>
        </div>
    )
}

export default Carrito