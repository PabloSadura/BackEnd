import {
  cartUser,
  createCart,
  deleteAllCart,
  deleteOneinCart,
  updateOne,
} from "../services/cartServices.js";
import { getById } from "../services/productServices.js";

export const getProducts = async (req, res) => {
  const productCart = await cartUser(req.user.username);
  const total = productCart.reduce((acc, el) => acc + el.price, 0);
  res.render("cart", {
    username: req.user.username,
    productCart,
    total: total,
  });
};

export const postProducts = async (req, res) => {
  const { id, stock } = req.body;
  const product = await getById(id);
  const { name, img, price } = product;
  const productCart = {
    id_username: req.user.username,
    name: name,
    count: stock,
    img: img,
    price: price * stock,
  };
  createCart(productCart);
  res.redirect("/productos");
};

export const putById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  updateOne(id, body);
  res.render("cart", { username: req.user.username });
};

export const deleteOneCart = async (req, res) => {
  const { id } = req.params;
  deleteOneinCart(id);
  res.redirect("/cart");
};

export const order = async (req, res) => {
  const products = await cartUser(req.user.username);
  emailCart.emailCart(req.user.username, req.user.email, products);
  deleteAllCart(req.user.username);
  res.render("ordenGenerada", { username: req.user.username });
};
