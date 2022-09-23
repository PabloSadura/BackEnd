const fs = require("fs");

const chat = [];
const products = [];

fs.readFile("products.txt", "utf-8", (err, data) => {
  try {
    const prod = JSON.parse(data);
    products.push(prod);
  } catch (err) {
    console.log(err);
  }
});
module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("Cliente conectado");

    socket.emit("bienvenida", chat);

    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
    socket.on("mensaje", (mensaje) => {
      chat.push(mensaje);
      const msj = JSON.stringify(chat);
      fs.writeFile("chat.txt", msj, () => {
        console.log("Chat enviado");
      });
      io.sockets.emit("respuesta", chat);
    });
    io.sockets.emit("products", products);
  });
};
