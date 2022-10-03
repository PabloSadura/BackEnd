const { Router } = require("express");
const fs = require("fs");
const cartRouter = Router();

let products = [];
let cart = [];
let idCart = 1;

(() => {
  fs.promises.readFile("products.txt", "utf-8").then((response) => {
    const data = JSON.parse(response);
    products.push(...data);
  });
})();

(() => {
  fs.promises.readFile("cart.txt", "utf-8").then((response) => {
    if (response) {
      const data = JSON.parse(response);
      cart.push(...data);
    }
  });
})();

const save = (file, array) => {
  fs.promises.writeFile(file, JSON.stringify(array));
};

// lista todos los productos del carrito
cartRouter.get("/:id/products", (req, res) => {
  const { id } = req.params;
  const data = cart.find((el) => el.id === Number(id));
  res.json(Date());
  res.json(data);
});

//  Crea un carrito y devuelve un id
cartRouter.post("/", (req, res) => {
  cart.push({ id: idCart, products: [] });
  res.json({ mensaje: "Carrito creado con exito", id: idCart });
  idCart++;
});

// Vacía un carrito y lo elimina
cartRouter.delete("/:idCart", (req, res) => {
  const { idCart } = req.params;
  cart = [];
  save("cart.txt", cart);
  res.json({ mensaje: "Se Elimino correctamente el carrito" });
});

// Para incorporar productos al carrito por su id de producto
cartRouter.post("/:idCart/:id/products", (req, res) => {
  const { id } = req.params;
  const { idCart } = req.params;
  try {
    const data = products.find((el) => el.id === Number(id));
    const dataCart = cart.find((el) => el.id === Number(idCart));
    const { products: product } = dataCart;
    product.push(data);
    save("cart.txt", cart);
    res.json({ mensaje: "Se agrego correctamente el producto" });
  } catch (error) {
    console.log("Error: ", error);
  }
});

//  Eliminar un producto del carrito por su id de carrito y de producto
cartRouter.delete("/:idCart/:id_prod/products", (req, res) => {
  const { idCart } = req.params;
  const { id_prod } = req.params;
  try {
    const dataCart = cart.find((el) => el.id === Number(idCart));
    const { products: product } = dataCart;
    const data = product.findIndex((el) => el.id === Number(id_prod));
    product.splice(data, 1);
    save("cart.txt", cart);
    res.json({ mensaje: "Se elimino correctamente el producto" });

    console.log(cart);
  } catch (error) {
    console.log("Error: ", error);
  }
});
module.exports = cartRouter;
