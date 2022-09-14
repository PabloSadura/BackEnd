const { Router } = require("express");
const fs = require("fs");
const handleRouter = Router();
const products = [];
let id = 0;
handleRouter.get("/", (req, res) => {
  res.render("./layouts/carousel.hbs");
});
handleRouter.get("/agregar", (req, res) => {
  res.render("./partials/formulario.hbs");
});
handleRouter.get("/productos", (req, res) => {
  res.render("./partials/productos.hbs", { products });
});
handleRouter.post("/confirmacion", (req, res) => {
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
