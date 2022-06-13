import { React } from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import '../App.css';

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/carrito">Carrito</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                        <Nav.Link href="/talles">Talles</Nav.Link>
                        <Nav.Link href="/devolucion">Política de Devolución</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar