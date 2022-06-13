import React, { useState } from 'react'
import Stock from '../Stock/Stock'

const ItemProduct = (props) => {
    const [cant, setCant] = useState(1)
    const [cart, setCart] = useState([])
    const prod = Stock;


    const guardarCarrito = (cart) => {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            // LocalStorage no soportado en este navegador
        }
    }

    //Modificar cantidad
    const increment = (id) => {
        setCant(cant + 1)
    }

    const decrement = (id) => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    //Para agregar al carrito
    const addToCart = (id) => {
        const idxProd = prod.findIndex(e => e.id === id)
        const itemCart = prod[idxProd]
        console.log('itemcart', itemCart)

        //Para agregar si el carrito esta vacío
        if (!cart === []) {
            const aux = cart
            itemCart.cantidad = cant
            itemCart.subtotal = itemCart.cantidad * itemCart.precio
            aux.push(itemCart)
            console.log('aux', aux)
            setCart(...aux);
            guardarCarrito(cart);

        }
        const idx = cart.findIndex(e => id === e.id)

        //Para agregar el primer item de un producto
        if (idx === -1) {
            const aux = cart
            itemCart.cantidad = cant
            itemCart.subtotal = itemCart.cantidad * itemCart.precio
            console.log('itemcart', itemCart)
            aux.push(itemCart)
            setCart(...aux);
            guardarCarrito(cart);
            console.log('carrito', cart)
        } else { //Para sumar unidades al producto
            const cartCart = cart
            cartCart[idx].cantidad = cartCart[idx].cantidad + cant

            itemCart.subtotal = itemCart.cantidad * itemCart.precio
            setCart([...cartCart])
            guardarCarrito(cart);
            console.log('carrito 1', cart)
        }

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

    return (
        <div className="container">
            <div className='producto' key={props.item.id}>
                <p>{props.item.nombre}</p>
                <img src={props.item.imagen} alt="imagen del producto" />
                <p>Precio Unitario: ${props.item.precio}.00</p>
                <div className='cantidad'>
                    <button onClick={() => decrement(props.item.id)}>-</button>
                    <p>{cant}</p>
                    <button onClick={() => increment(props.item.id)}>+</button>
                </div>
                <br />
                <button className='agregar' onClick={() => { addToCart(props.item.id) }}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemProduct