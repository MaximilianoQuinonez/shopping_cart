import { React } from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import '../App.css';

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="barrita" to="/home">Home</Link>
                        <Link className="barrita" to="/carrito">Carrito</Link>
                        <Link className="barrita" to="/contacto">Contacto</Link>
                        <Link className="barrita" to="/talles">Talles</Link>
                        <Link className="barrita" to="/devolucion">Política de Devolución</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar