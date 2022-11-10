import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function formLogin() {
  const navigate = useNavigate();
  const { login, setLogin, loginIn } = useContext(LoginContext);
  const { user, setUser } = useState([]);

  const redirect = (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.name.value,
      password: e.target.password.value,
    };
    loginIn(obj);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        className="m-4 p-4 border justify rounded shadow"
        style={{ width: "50vw" }}
        method="post"
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
          Iniciar
        </Button>
      </Form>
    </div>
  );
}

export default formLogin;
