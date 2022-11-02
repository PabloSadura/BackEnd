import React from "react";
import "./mensajes.css";
function MensajesChat({ mensaje }) {
  return (
    <div className="bundler">
      <h5 className="title">{mensaje.author.id}</h5>
      <p>{mensaje.text}</p>
    </div>
  );
}

export default MensajesChat;
