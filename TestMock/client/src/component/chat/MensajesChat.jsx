import React from "react";

function MensajesChat({ mensaje }) {
  return (
    <div>
      <h5>{mensaje.email}</h5>
      <p>{mensaje.mensaje}</p>
    </div>
  );
}

export default MensajesChat;
