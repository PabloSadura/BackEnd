import CartServices from "../services/cart.services.js";
import ProductServices from "../services/products.services.js";
import { OrderEmail } from "../config/mailer.js";
export default class CartController {
  constructor() {
    this.cartServices = new CartServices();
    this.productServices = new ProductServices();
    this.orderMail = new OrderEmail();
  }

  getProducts = async (req, res) => {
    const order = await this.#getOrder(req, res);
    if (order) {
      const { items } = order;
      const total = items.reduce((acc, el) => acc + el.price, 0);
      res.render("cart", {
        username: req.oidc.user.nickname,
        items,
        total: total,
      });
    } else {
      res.render("cart", { username: req.oidc.user.nickname, items: [] });
    }
  };

  postProducts = async (req, res) => {
    const product = await this.productServices.getById(req.body.id);
    const order = await this.#getOrder(req);
    if (order) {
      const obj = { ...product };
      await this.cartServices.updateOne(req.oidc.user.email, obj);
    } else {
      const productCart = {
        email: req.oidc.user.email,
        items: [
          {
            ...product,
          },
        ],
        buyOrder: false,
      };
      this.cartServices.createCart(productCart);
    }
    res.redirect("/products");
  };
  putById = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    this.cartServices.updateOne(id, body);
    res.render("cart", { username: req.oidc.user.nickname });
  };
  deleteOneCart = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const order = await this.#getOrder(req);
    console.log(order);
    await this.cartServices.deleteOrderById(id, order);
    res.redirect("/cart");
  };

  order = async (req, res) => {
    const order = await this.#getOrder(req, res);
    this.orderMail.orderEmail(req.oidc.user.email, order);
    order.buyOrder = true;
    await this.cartServices.updateOrder(order._id, order);
    res.render("ordenGenerada", { username: req.oidc.user.nickname });
  };

  #getOrder = async (req) => {
    const productCart = await this.cartServices.cartUser(req.oidc.user.email);
    const order = productCart.find((el) => el.buyOrder === false);
    return order;
  };
}
