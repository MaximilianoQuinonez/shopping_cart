import React, { createContext, useEffect, useState } from "react";
import swal from 'sweetalert';
export const Context = createContext();

export const ContextWrapper = ({ children }) => {
    //Logica
    const [cant, setCant] = useState(1)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);

    //Limpiar carrito
    const clearCart = () => {
        if (cart !== []) {
            setCart([]);
            swal("El carrito se vacío correctamente.")
        }
    }

    useEffect(() => {
        let totalAux = 0
        cart.forEach(item => (totalAux += item.precio * item.cantidad))
        setTotal(totalAux)
    }, [cart])

    //Para agregar al carrito
    const addToCart = (item) => {

        const itemEnElCarrito = cart.find(itemCart => itemCart.id === item.id)
        if (itemEnElCarrito) {
            const aux = cart.filter(itemCart => itemCart.id !== item.id)
            const itemAReAgregar = { ...item, cantidad: itemEnElCarrito.cantidad + 1 }
            itemAReAgregar.subtotal = itemEnElCarrito.cantidad * itemEnElCarrito.precio
            aux.push(itemAReAgregar)
            setCart(aux)
        } else {
            item.cantidad = 1
            item.subtotal = item.cantidad * item.precio
            setCart([...cart, item])
        }
        console.log('carrito total', cart)
    }

    //para borrar productos del carrito
    const deleteFromCart = (item) => {
        //Primero busca si existe
        const itemABorrar = cart.find(itemCart => itemCart.id === item.id)
        if (itemABorrar.cantidad === 1) {
            const aux = cart.filter(itemCart => itemCart.id !== itemABorrar.id)
            setCart(aux)
        } else {
            const aux = cart.filter(itemCart => itemCart.id !== item.id)
            const itemAReAgregar = { ...item, cantidad: itemABorrar.cantidad - 1 }
            itemAReAgregar.subtotal = itemABorrar.cantidad * itemABorrar.precio
            aux.push(itemAReAgregar)
            setCart(aux)
        }
    }

    return (
        <Context.Provider value={{ addToCart, cart, deleteFromCart, cant, total, clearCart }}>
            {children}
        </Context.Provider>
    );
}