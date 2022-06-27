
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contacto = () => {
    return (
        <div className='bandeja'>
            <div className='contenedor-de-texto'>
                <h1>Medios de Contactos</h1>
                <p>Resolvemos dudas y consultas.</p>
                <FontAwesomeIcon className="iconos" icon={faEnvelope} /><a href="#">grafizona@contacto.com.ar</a>
                <br />
                <FontAwesomeIcon className="iconos" icon={faFacebook} /><a href="#">Facebook</a>
                <br />
                <FontAwesomeIcon className="iconos" icon={faWhatsapp} /><a href="#">Whatsapp</a>
                <br />
                <FontAwesomeIcon className="iconos" icon={faInstagram} /><a href="#">Instagram</a>
                <br />
                <FontAwesomeIcon className="iconos" icon={faTwitter} /><a href="#">Twitter</a>
            </div>
        </div>
    );
}

export default Contacto;

