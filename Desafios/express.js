const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bienvenido a nuestro backend");
});
let visitas = 0;
app.get("/visitas", (req, res) => {
  res.send(`la cantidad de visitas son ${++visitas}`);
});
app.get("/fyh", (req, res) => {
  res.send({ fyh: new Date().toLocaleString() });
});
app.get("/productos", (req, res) => {
  res.send();
});

const PORT = 8082;
app.listen(PORT, (req, res) => {
  console.log(`Escuchando al puerto ${PORT}`);
});
