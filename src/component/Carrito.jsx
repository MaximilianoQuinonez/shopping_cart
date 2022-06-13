import React, { useState } from 'react';
import swal from 'sweetalert';

const Carrito = (props) => {
    const carrito = JSON.parse(localStorage.getItem("cart"));
    let total = 0
    const [cart, setCart] = useState([carrito])

    const guardarCarrito = (cart) => {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            // LocalStorage no soportado en este navegador
        }
    }

    if (!carrito) {
        return <div>Carrito Vacio</div>
    }
    const totCart = () => {
        let tot = 0
        carrito.forEach(e => {
            tot = tot + e.subtotal
        });
        total = tot
    }

    //Limpiar carrito
    const clearCart = () => {
        const aux = [];
        setCart(aux);
        guardarCarrito(cart);
        console.log('estado final cart', cart);
    }

    //Modal de confirmación
    const confirmarCompra = () =>{
       // swal("La compra se confirmo con éxito, aquí está su ticket.")
        carrito.forEach(e => alert(
            e.nombre)
            )
        };

    return (

        <div className='Carrito'>
            <div className='carrito-header'>
                <h1>Carrito $: .00</h1>
                <button onClick={() => clearCart()}>Vaciar Carrito</button>
            </div>
            <br />
            <br />
            {<div className='carrito-contenedor'> {carrito.map((c, idx) => (
                <div className='Item' key={idx}>
                    <p>Producto: {c.nombre}</p>
                    <p>Precio Unitario: ${c.precio}.00</p>
                    <p>Cantidad: {c.cantidad}</p>
                    <p>Subtotal: ${c.subtotal}.00</p>
                    <button>Borrar</button>
                </div>
            ))}
            </div>}
            <div className='carrito-footer'>
                <br />
                <button onClick={() => confirmarCompra()}>Confirmar Compra</button>
                <br />
            </div>
        </div>

    )
}

export default Carrito