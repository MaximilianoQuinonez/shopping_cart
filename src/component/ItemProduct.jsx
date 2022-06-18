import React, { useContext } from 'react'
import Stock from '../Stock/Stock'
import { Context } from '../services/Context'

const ItemProduct = (props) => {

    const {addToCart, deleteFromCart, cant} = useContext(Context)

    /*const guardarCarrito = (cart) => {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            // LocalStorage no soportado en este navegador
        }
    } */

    return (
        <div className="container">
            <div className='producto' key={props.item.id}>
                <p>{props.item.nombre}</p>
                <img src={props.item.imagen} alt="imagen del producto" />
                {props.item.cantidad && <p>Cantidad: {props.item.cantidad}</p>}
                <p>Precio Unitario: ${props.item.precio}.00</p>
                <br />
                <button className='agregar' onClick={() => { addToCart(props.item) }}>Agregar</button>
                <button className='agregar' onClick={() => { deleteFromCart(props.item.id) }}>Borrar</button>
            </div>
        </div>
    )
}

export default ItemProduct;