const fs = require("fs");

const chat = [];
const products = [];
let id = 0;

const save = async (file, data) => {
  try {
    const info = await fs.promises.appendFile(
      file,
      JSON.stringify(data),
      () => {
        console.log("Enviado");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("Cliente conectado");

    socket.emit("bienvenida", chat);
    socket.emit("totalProducts", products);

    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
    // recibo, grabo y devuelvo un respuesta de chat
    socket.on("mensaje", (mensaje) => {
      chat.push(mensaje);
      save("chat.txt", chat);
      const msj = JSON.stringify(chat);

      io.sockets.emit("respuesta", chat);
    });
    // recibo, guardo y devuelvo un producto
    socket.on("newProduct", (prod) => {
      products.push(prod);
      save("products.txt", products);
      io.sockets.emit("respuestaProd", products);
    });
  });
};
