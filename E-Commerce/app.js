const express = require("express");
const app = express();
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log("Servidor Inicializado");
});

require("./socket")(io);
