const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./src/views");
app.set("view engine", "ejs");
const usuarios = [{ nombre: "Pablo", apellido: "Sadura" }];

app.get("/", (req, res) => {
  res.render("pages/index", {
    usuarios,
    render: true,
  });
});

const PORT = process.env || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});
