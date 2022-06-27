import React, { useContext, useState } from 'react'
import { Context } from '../services/Context'
import { useEffect } from 'react'

const ItemProduct = (props) => {

    const { addToCart, deleteFromCart, cart } = useContext(Context)
    const [contar, setContar] = useState(0);

    //Para modificar la cantidad de unidades de un producto
    useEffect(() => {
    }, [cart])

    const sumarCantidad = () => {
        setContar(contar + 1)
    }
    const restarCantidad = () => {
        setContar(contar - 1)
    }

    return (
        <div className="container">
            <article className='producto'>
                <div className='nombre-producto'>
                    <p>{props.item.nombre}</p>
                </div>
                <div className='cuerpo-producto'>
                    <img src={props.item.imagen} alt="imagen del producto" />
                    {props.item.cantidad && <p>Cantidad:{contar}</p>}
                    <p>Precio Unitario: ${props.item.precio}.00</p>
                    <br />
                </div>
                <div className='botones-producto'>
                    <button className='agregar' onClick={() => { addToCart(props.item); sumarCantidad() }}>Agregar</button>
                    <button className='quitar' onClick={() => { deleteFromCart(props.item); restarCantidad() }}>Borrar</button>
                </div>
            </article>
        </div>
    )
}

export default ItemProduct;