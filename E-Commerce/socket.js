const fs = require("fs");

const chat = [];
const products = [];
let id = 0;

module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("Cliente conectado");

    socket.emit("bienvenida", chat);
    socket.emit("totalProducts", products);

    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
    // recibo grabo y decuelvo un respuesta de chat
    socket.on("mensaje", (mensaje) => {
      chat.push(mensaje);
      const msj = JSON.stringify(chat);
      fs.writeFile("chat.txt", msj, () => {
        console.log("Chat enviado");
      });
      io.sockets.emit("respuesta", chat);
    });

    socket.on("newProduct", (prod) => {
      products.push(prod);
      console.log(products);
      const product = JSON.stringify(products);
      fs.writeFile("products.txt", product, () => {
        console.log("Se agrego correctamente");
      });
      io.sockets.emit("respuestaProd", product);
    });
  });
};
