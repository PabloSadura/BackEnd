// llamo a cartServices

import { cartUser } from "../services/cartServices.js";

export const getProducts = async (req, res) => {
  const productCart = await cartUser(req.user.username);
  const total = productCart.reduce((acc, el) => acc + el.price, 0);
  res.render("cart", {
    username: req.user.username,
    productCart,
    total: total,
  });
};
