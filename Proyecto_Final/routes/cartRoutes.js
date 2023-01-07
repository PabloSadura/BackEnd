import { Router } from "express";
import CartMongoDao from "../persistencia/daos/cartMongoDao.js";
import ProductsMongoDAO from "../persistencia/daos/productsMongoDao.js";

const cartRouter = Router();
const cartMongo = new CartMongoDao();
const productMongo = new ProductsMongoDAO();

cartRouter.get("/", async (req, res) => {
  const productCart = await cartMongo.getByUser(req.user.username);
  const total = productCart.reduce((acc, el) => acc + el.price, 0);
  res.render("cart", {
    username: req.user.username,
    productCart,
    total: total,
  });
});
cartRouter.post("/", async (req, res) => {
  const { id, stock } = req.body;
  const product = await productMongo.getById(id);
  const { name, img, price } = product;
  const productCart = {
    id_username: req.user.username,
    name: name,
    count: stock,
    img: img,
    price: price * stock,
  };
  cartMongo.create(productCart);
  res.redirect("/productos");
});

cartRouter.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  cartMongo.delete(id);
  res.redirect("/cart");
});

cartRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  cartMongo.update(id, body);
  res.render("cart", { username: req.user.username });
});
cartRouter.get("/ordenGenerada", (req, res) => {
  cartMongo.deleteAllCart(req.user.username);
  res.render("ordenGenerada", { username: req.user.username });
});

export default cartRouter;
