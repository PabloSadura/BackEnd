const { Router } = require("express");
const fs = require("fs");
const productsRouter = Router();
let products = [];
const login = true;
const middlewareLogin = (req, res, next) => {
  login ? next() : res.send("No tiene permiso");
};

// leo el archivo de productos

const read = (file, array) => {
  fs.promises.readFile(file, "utf-8").then((response) => {
    const data = JSON.parse(response);
    array.push(...data);
  });
};
// muestro los productos completos o no dependiendo de un ID
productsRouter.get("/:id?", (req, res) => {
  const { id } = req.params;
  read("products.txt", products);
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
  read("products.txt", products);
  products.push(product);
  fs.promises.appendFile("products.txt", JSON.stringify(products));
  res.status(200).send("se agrego correctamente");
});

// Modifico productos por id solo usuario admin
productsRouter.put("/:id", middlewareLogin, (req, res) => {
  res.send("Se actualizo correctamente");
});

// Elimino productos por ID solo admin

productsRouter.delete("/:id", middlewareLogin, (req, res) => {
  res.send("Se borro correctamente");
});

module.exports = productsRouter;
