import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function NavbarHeader() {
  const { login, setLogin, user, logout } = useContext(LoginContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Anime Funstore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {login && user ? (
              <Nav.Link href="/agregarProducts">Agregar Productos</Nav.Link>
            ) : (
              <></>
            )}
          </Nav>
          <Link to="/cart" className="me-4">
            Cart
          </Link>
          {login && user ? (
            <>
              <p className="me-2 my-2">Bienvenido {user}</p>
              <button type="button" className="btn" onClick={logout}>
                <i className="bi bi-power"></i>
              </button>
            </>
          ) : (
            <Link to="/login" className="me-4">
              LOGIN
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
