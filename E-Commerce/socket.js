const fs = require("fs");
let chat = [];
let products = [];
let readFile = 0;
let id = 0;

const save = (file, msj) => {
  try {
    fs.promises.writeFile(file, msj, () => {
      console.log("cargado...");
    });
  } catch (error) {
    console.log("Error", error);
  }
};

const read = (file, data) => {
  try {
    fs.promises.readFile(file, "utf-8").then((res) => {
      if (res) {
        const info = JSON.parse(res);
        data.push(...info);
        console.log(data);
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("Cliente conectado");

    if (readFile < 1) {
      read("products.txt", products);
      readFile++;
    }

    socket.emit("totalProducts", products);

    socket.emit("bienvenida", chat);

    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
    // recibo, grabo y devuelvo un respuesta de chat
    socket.on("mensaje", (mensaje) => {
      chat.push(mensaje);
      const msj = JSON.stringify(chat);
      save("chat.txt", msj);

      io.sockets.emit("respuesta", chat);
    });
    // recibo, guardo y devuelvo un producto
    socket.on("newProduct", (prod) => {
      products.push(prod);
      const product = JSON.stringify(products);
      save("products.txt", product);
      io.sockets.emit("respuestaProd", products);
    });
  });
};
