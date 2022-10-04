const { Router } = require("express");
const fs = require("fs");
const productsRouter = Router();
let products = [];
let id = 0;
const login = true;
const middlewareLogin = (req, res, next) => {
  login ? next() : res.send("No tiene permiso");
};

(() => {
  fs.promises.readFile("products.txt", "utf-8").then((response) => {
    const data = JSON.parse(response);
    products.push(...data);
    products.forEach((el) => {
      id = el.id;
    });
  });
})();

// muestro los productos completos o no dependiendo de un ID
productsRouter.get("/:id?", (req, res) => {
  const { id } = req.params;
  if (id) {
    const info = products.find((el) => el.id === Number(id));
    res.json(info);
  } else {
    res.json(products);
  }
});

// agrego productos dependiendo usuario admin
productsRouter.post("/", middlewareLogin, (req, res) => {
  const product = req.body;
  try {
    id++;
    const timestamp = Date();
    products.push({ id: id, timestamp: timestamp, ...product });
    fs.promises.writeFile("products.txt", JSON.stringify(products));
    res.json({ mensaje: "producto agregado correctamente", id: id });
  } catch (error) {
    console.log("Error:", error);
  }
});

// Modifico productos por id solo usuario admin
productsRouter.put("/:id", middlewareLogin, (req, res) => {
  const { title, price, thumbnail } = req.body;
  const { id } = req.params;
  const data = products.find((el) => el.id === Number(id));
  data.title = title;
  data.price = price;
  data.thumbnail = thumbnail;
  fs.promises.writeFile("products.txt", JSON.stringify(products));
  res.json({ mensaje: "producto modificado correctamente" });
});

// Elimino productos por ID solo admin

productsRouter.delete("/:id", middlewareLogin, (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((el) => el.id === Number(id));
  products.splice(index, 1);
  fs.promises.writeFile("products.txt", JSON.stringify(products));
  res.json({ mensaje: "Se borro correctamente" });
});

module.exports = productsRouter;
