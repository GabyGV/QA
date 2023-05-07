import "./topbar.css";
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function Topbar() {
  //TODO: Agregar el boton de LogOut y sus funcionalidades
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Cobijados Administrador</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/users">Usuarios</Nav.Link>
            <Nav.Link as={Link} to="/products">Productos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}
