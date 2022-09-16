const { Router } = require("express");
const routerPug = Router();
const fs = require("fs");

const products = [];

const producto = fs.readFileSync("productos.txt", "utf-8");
const list = JSON.parse(producto);
products.push(...list);
let id = products.length;

routerPug.get("/", (req, res) => {
  res.render("index");
});

routerPug.get("/agregar", (req, res) => {
  res.render("formulario");
});
routerPug.get("/productos", (req, res) => {
  res.render("producto", { products });
});
routerPug.post("/agregar", (req, res) => {
  try {
    id++;
    const product = req.body;
    products.push({ id: id, ...product });
    res.redirect("/agregar");
  } catch (error) {
    console.log(error);
  }
});

module.exports = routerPug;
