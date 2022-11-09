import React from "react";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function formLogin() {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(LoginContext);
  const redirect = (e) => {
    e.preventDefault();
    setLogin(e.target.name.value);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        className="m-4 p-4 border justify"
        style={{ width: "50vw" }}
        onSubmit={redirect}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Ingresar tu Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default formLogin;
