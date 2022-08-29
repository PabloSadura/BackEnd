const express = require("express");
const contenedor = require("./contenedor");
const prod = new contenedor.Contenedor();
const app = express();

app.get("/", (req, res) => {
  res.send("Pagina principal");
});
app.get("/productos", (req, res) => {
  const list = prod.getAll();

  res.send(`Productos en el archivo: ${list}`);
});

app.get("/productosRandom", (req, res) => {
  const number = Math.floor(Math.random() * 10);
  const list = prod.getById(number);
  list
    ? res.send(`
        <h2>#${number}</h2>
      <h2> Titulo: ${list.title}</h2>
      <h3>Precio: ${list.price}</h3> 
      <img src="${list.thumbnail}" alt="">`)
    : res.send("No existe producto");
});

const PORT = process.env.PORT || 8082;

app.listen(PORT, (req, res) => {
  console.log(`Escuchando puerto ${PORT}`);
});
