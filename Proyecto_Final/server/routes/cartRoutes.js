const { Router } = require("express");
const cartRouter = Router();

// lista todos los productos del carrito
cartRouter.get("/:id/products", (req, res) => {
  res.send("todos los productos del carrito");
});

//  Crea un carrito y devuelve un id
cartRouter.post("/", (req, res) => {
  res.send("Se creo el carrito");
});

// Vacía un carrito y lo elimina
cartRouter.delete("/:id", (req, res) => {
  res.send("producto eliminado");
});

// Para incorporar productos al carrito por su id de producto
cartRouter.post("/:id/products", (req, res) => {
  res.send("se agrego un producto");
});

//  Eliminar un producto del carrito por su id de carrito y de producto
cartRouter.delete(":id/products/:id_prod", (req, res) => {
  res.send("Se elimino el producto del carrito");
});
module.exports = cartRouter;
