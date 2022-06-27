import React, { useState, useContext } from 'react';
import swal from 'sweetalert';
import { Context } from '../services/Context';

const Ticket = (props) => {
    const { addToCart, deleteFromCart, cart, setCart, total, clearCart } = useContext(Context)

    //Input del nombre y correo
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    //Validación del correo
    const validarCorreo = (correo) => {
        console.log(correo)
        if (correo.includes('@')) {
            swal({
                title: 'Compra Finalizada',
                text: 'Enviamos tu ticket y datos de la compra a tu correo.',
                buttons: {
                    ok: {
                        text: 'Aceptar'
                    }
                },
                icon: "success"
            })
        } else {
            swal({
                title: 'Correo Inválido',
                text: 'Revisa el ingresado e intenta nuevamente.',
                buttons: {
                    ok: {
                        text: 'Aceptar'
                    }
                },
                icon: "error"
            })
        }
    }

    return (
        <div className="bandeja">
            <div className='Carrito'>
                <div className='carrito-header'>
                    <form onSubmit={ev => {
                        ev.preventDefault();
                        setNombre(ev.target.nombre.value);
                        setCorreo(ev.target.correo.value);
                        validarCorreo(ev.target.correo.value);
                    }
                    }>
                        <h1>Ingrese sus datos y le enviaremos el ticket de la compra.</h1>
                        <input
                            placeholder='Nombre y Apellido'
                            type='text'
                            name='nombre'
                            autoComplete='off'
                        ></input>
                        <input
                            placeholder='correo@gmail.com'
                            type='mail'
                            name='correo'
                            autoComplete='off'
                        ></input>
                        <br />
                        <br />
                        <button type="submit">Enviar</button>
                    </form>
                    <br />
                    <h1>Carrito $: {total}.00</h1>
                </div>
                <br />
                <br />
                {<div className='carrito-contenedor'> {cart.map((c, idx) => (
                    <div className='Item' key={idx}>
                        {console.log("carrito mapeado:", c)}
                        <p>Producto: {c.nombre}</p>
                        <p>Precio Unitario: ${c.precio}.00</p>
                        <p>Cantidad: {c.cantidad}</p>
                        <p>Subtotal: ${c.cantidad * c.precio}.00</p>
                    </div>
                ))}
                </div>}
            </div>
        </div>
    )
}

export default Ticket