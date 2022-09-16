const { Router } = require("express");
const fs = require("fs");
const ejsRouter = Router();
const products = [];

const producto = fs.readFileSync("productos.txt", "utf-8");
const list = JSON.parse(producto);
products.push(...list);
let id = products.length;
console.log(products);

ejsRouter.get("/", (req, res) => {
  res.render("./pages/index.ejs");
});
ejsRouter.get("/agregar", (req, res) => {
  res.render("./partials/formulario.ejs");
});

ejsRouter.get("/productos", (req, res) => {
  res.render("./partials/productos.ejs", { productos: products });
});

ejsRouter.post("/agregar", (req, res) => {
  try {
    id++;
    const product = req.body;
    products.push({ id: id, ...product });
    res.redirect("/agregar");
  } catch (error) {
    console.log(error);
  }
});

module.exports = ejsRouter;
