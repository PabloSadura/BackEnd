const { response, application } = require("express");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

let frase = "Hola mundo como están";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/frase", (req, res) => {
  res.send(`La frase es: ${frase}`);
});
app.get("/api/letra/:num", (req, res) => {
  const { num } = req.params;
  try {
    let letra = frase[num];
    res.send(`Letra: ${letras}`);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/palabra/:num", (req, res) => {
  const { num } = req.params;
  try {
    const array = frase.split(" ");
    const palabra = array[num - 1];
    res.status(200).send(palabra);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  const array = frase.split(" ");
  array.push(palabra);
  frase = array.join(" ");
  res.json({
    agregada: palabra,
    pos: array.length,
  });
});

app.delete("/api/palabras/:pos", (req, res) => {
  const { palabra } = req.body;
  const { pos } = req.params;
  const array = frase.split(" ");
  const palabraBarrada = array[pos - 1];
  array.splice(pos - 1, 1);
  array.join(" ");
  console.log(array);
});

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
