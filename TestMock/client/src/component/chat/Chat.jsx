import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import axios from "axios";
import MensajesChat from "./MensajesChat";
function Chat() {
  const [chat, setChat] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const URL = "http://localhost:8080/chat";

  async function getChat() {
    const chatdb = await axios.get(URL);
    const { data } = chatdb;
    setChat(data);
  }
  async function createChat(obj) {
    const chatdb = await axios.post(URL, obj);
    if (chat.length !== 0) {
      setChat(obj);
    } else {
      setChat([...chat, obj]);
    }
  }

  useEffect(() => {
    getChat();
  }, [chat]);

  const message = (e) => {
    e.preventDefault();
    const mensajes = {
      author: { id: e.target.email.value, fecha: new Date() },
      text: e.target.mensaje.value,
    };
    createChat(mensajes);
    e.target.email.value = "";
    e.target.mensaje.value = "";
  };

  return (
    <>
      <Button
        className="btn btn-primary float-end sticky-bottom mb-4 me-4"
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
          {chat.length ? (
            chat.map((el) => <MensajesChat key={el._id} mensaje={el} />)
          ) : (
            <h3>No hay mensajes</h3>
          )}
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
