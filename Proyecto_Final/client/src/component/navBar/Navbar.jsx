import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarHeader() {
  const { login, setLogin } = useContext(LoginContext);

  const validData = (e) => {
    e.target.checked ? setLogin(true) : setLogin(false);
  };

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
            {login ? (
              <Nav.Link href="/agregarProducts">Agregar Productos</Nav.Link>
            ) : (
              <></>
            )}
            <Form.Group className="mt-2 ms-2" controlId="checked">
              <Form.Check
                type="checkbox"
                label="Login"
                onClick={(e) => {
                  validData(e);
                }}
              />
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
