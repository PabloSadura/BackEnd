const { Router } = require("express");
const fs = require("fs");
const handleRouter = Router();
const products = [];
let id = 0;

const producto = fs.readFileSync("productos.txt", "utf-8");
const list = JSON.parse(producto);
products.push(...list);
id = products.length;

handleRouter.get("/", (req, res) => {
  res.render("./layouts/carousel.hbs");
});
handleRouter.get("/agregar", (req, res) => {
  res.render("./partials/formulario.hbs");
});
handleRouter.get("/productos", (req, res) => {
  res.render("./partials/productos.hbs", { products });
});
handleRouter.post("/agregar", (req, res) => {
  try {
    id++;
    const product = req.body;
    products.push({ id: id, ...product });
    res.redirect("/agregar");
  } catch (error) {
    console.log(error);
  }
});

module.exports = handleRouter;
