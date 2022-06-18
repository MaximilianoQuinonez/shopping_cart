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

    //para borrar productos del carrito
    const deleteFromCart = (id) => {
        //Primero busca si existe
        const aux = cart
        const indice = cart.findIndex(e => (e.id === id))
        //Si hay 1 solo elemento borra el item
        if (aux[indice].cant < 2) {
            aux.splice(indice, 1);

            setCart([...aux])
            guardarCarrito(cart);
        } else { //Si hay más de 1, reduce la cant en 1
            aux[indice].cant = aux[indice].cant - 1;
            aux[indice].subtotal = aux[indice].cant * aux[indice].precio;
            setCart([...aux])
            guardarCarrito(cart);
        }
    }

    //Limpiar carrito
    const clearCart = () => {
        const vacio = [];
        setCart(vacio);
        // setCart([vacio]);
        guardarCarrito(cart);
    }

    //Modal de confirmación
    const confirmarCompra = () => {
        // swal("La compra se confirmo con éxito, aquí está su ticket.")
        carrito.forEach(e => alert(
            e.nombre)
        )
    };

    return (
        <div className="bandeja">
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
                        <button onClick={() => deleteFromCart()}>Borrar</button>
                    </div>
                ))}
                </div>}
                <div className='carrito-footer'>
                    <br />
                    <button onClick={() => confirmarCompra()}>Confirmar Compra</button>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Carrito