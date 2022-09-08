const express = require("express");
const app = express();
const productosRoutes = require("./routes/productos.js");
const multer = require("multer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", productosRoutes);
app.use(express.static(__dirname + "/public"));
app.use(multer({ dest: __dirname + "/public/img" }).single("fileMulter"));
const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(`Escuchando puerto ${PORT}`);
});
