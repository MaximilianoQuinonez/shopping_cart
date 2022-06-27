import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <h3>NAVEGACION</h3>
                <a href="/home">Productos</a> <br />
                <a href="/talles">Guía de Talles</a> <br />
                <a href="/devolucion">Política de Devolución</a><br />
            </section>
            <section>
                <h3>REDES SOCIALES</h3>
                <FontAwesomeIcon className="iconos" icon={faFacebook} /><a href="#">    Facebook</a>
                <br />
                <FontAwesomeIcon className="iconos" icon={faWhatsapp} /><a href="#">    Whatsapp</a>
                <br />
                <FontAwesomeIcon className="iconos" icon={faInstagram} /><a href="#">   Instagram</a>
                <br />
                <FontAwesomeIcon className="iconos" icon={faTwitter} /><a href="#"> Twitter</a>
            </section>
            <section>
                <h3>MEDIOS DE PAGOS</h3>
                <h5>Tarjetas</h5>

                <h3>FORMAS DE ENVÍO</h3>
                <h5>ANDREANI - OCA</h5>
            </section>
        </footer>
    );
}