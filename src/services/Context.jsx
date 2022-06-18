import React, { createContext, useEffect, useState } from "react";

import Stock from "../Stock/Stock";
export const Context = createContext();

export const ContextWrapper = ({ children }) => {
    //Logica
    const [cant, setCant] = useState(1)
    const [cart, setCart] = useState([])
    const prod = Stock;


    //Para agregar al carrito
    const addToCart = (item) => {
        const itemEnElCarrito = cart.find(itemCart => itemCart.id === item.id)
        console.log('cantidad del item', itemEnElCarrito?.cantidad)
       
        if (itemEnElCarrito) {
            const aux = cart.filter(itemCart => itemCart.id !== item.id)
            const itemAReAgregar = { ...item, cantidad: itemEnElCarrito.cantidad + 1 }
            aux.push(itemAReAgregar)
            setCart(aux)
        } else {
            item.cantidad = 1
            setCart([...cart, item])
        }

        console.log('carrito total', cart)
    }

    //para borrar productos del carrito
    const deleteFromCart = (id) => {
        //Primero busca si existe
        const borrado = cart.find(e => (e.id === id))
        //Si hay 1 solo elemento borra el item
        if (borrado.cantidad <= 1) {
            const aux = cart.filter(item => item.id !== borrado.id)
            setCart(aux);
        } else {
            const aux = cart;
            const auxBorrado = aux.find(item => item.id === borrado.id)
            console.log('auxborrado antes', auxBorrado)
            auxBorrado.cantidad -= 1
            console.log('auxborrado dpues', auxBorrado)
        }
        /*   if (aux[indice].cantidad < 2) {
               aux.splice(indice, 1);
               setCart(aux)
               console.log('producto borrado:', cart)
           } else { //Si hay más de 1, reduce la cant en 1
               aux[indice].cantidad = aux[indice].cantidad - 1;
               aux[indice].subtotal = aux[indice].cantidad * aux[indice].precio;
               setCart(aux)
               console.log('producto reducido:', cart)
           } */
    }

    return (
        <Context.Provider value={{ addToCart, cart, deleteFromCart, cant }}>
            {children}
        </Context.Provider>
    );
}