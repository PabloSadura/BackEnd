const express = require("express");
const fs = require("fs");
const { Server: SoketServer } = require("socket.io");
const http = require("http");
const app = express();
const httpServer = http.createServer(app);
const socketServer = new SoketServer(httpServer);

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

//WEB SOCKET
const productos = [];
socketServer.on("connection", (client) => {
  console.log("Usuario conectado");

  client.on("mensaje", (msj) => {
    console.log(msj);
    mensajes.push(msj);
    socketServer.sockets.emit("mensajeArray", mensajes);
  });
  client.on("producto", (info) => {
    console.log(info);
    productos.push(info);
    socketServer.sockets.emit("products", productos);
  });
});

//

// AGREGAR DATOS AL ARCHIVO
fs.readFile("ruta", "utf-8", (error, data) => {});
fs.writeFile("ruta", "contenido", (error, data) => {});
fs.appendFile("ruta", "cont enido", (error, data) => {});

// promisse

fs.promises
  .readFile("ruta", "utf-8")
  .then((data) => {})
  .catch((err) => {});

//

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Escuchando el puerto ${PORT}`);
});
