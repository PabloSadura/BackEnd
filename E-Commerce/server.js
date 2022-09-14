const express = require("express");
const app = express();
const productosRoutes = require("./routes/productos.js");
const handleRoutes = require("./routes/handlebarsServer.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", productosRoutes);

app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(`Escuchando puerto ${PORT}`);
});
