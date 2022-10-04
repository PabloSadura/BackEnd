import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import MensajesChat from "./mensajesChat";
function Chat() {
  const [chat, setChat] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const message = (e) => {
    e.preventDefault();
    setChat([
      ...chat,
      {
        fecha: Date(),
        email: e.target.email.value,
        mensaje: e.target.mensaje.value,
      },
    ]);
    e.target.email.value = "";
    e.target.mensaje.value = "";
    console.log(chat);
  };
  return (
    <>
      <Button
        className="btn btn-primary position-absolute bottom-0 end-0 mb-4 me-4"
        onClick={handleShow}
      >
        Chat
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="border rounded-2"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chat</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ height: "60%" }}>
          {chat.map((el) => (
            <MensajesChat key={el.fecha} mensaje={el} />
          ))}
        </Offcanvas.Body>
        <Offcanvas.Body>
          <Form onSubmit={message}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                className="mb-3"
              />
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comentarios"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  name="mensaje"
                  placeholder="Deja tu comentario"
                />
              </FloatingLabel>
            </FloatingLabel>
            <Button className="btn btn-primary " type="submit">
              Enviar
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Chat;
