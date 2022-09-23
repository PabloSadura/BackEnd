const express = require("express");
const fs = require("fs");
const { Server: SoketServer } = require("socket.io");
const hbs = require("express-handlebars");
const http = require("http");
const handleRouter = require("../routes/handlebarsRoute.js");

const app = express();
const httpServer = http.createServer(app);
const socketServer = new SoketServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "public"));
app.use("/", handleRouter);

app.engine(
  "hbs",
  hbs.engine({
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views",
    extname: ".hbs",
    defaultLayout: "index.hbs",
  })
);

app.set("views", "./src/views");
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});
