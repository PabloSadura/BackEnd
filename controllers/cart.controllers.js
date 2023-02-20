import CartServices from "../services/cart.services.js";
import ProductServices from "../services/products.services.js";

export default class CartController {
  constructor() {
    this.cartServices = new CartServices();
    this.productServices = new ProductServices();
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
    const order = await this.#getOrder(req, res);
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
    this.cartServices.deleteOneinCart(id);
    res.redirect("/cart");
  };

  order = async (req, res) => {
    const order = await this.#getOrder(req, res);
    // aca tengo que mandar el email con nodemailer
    order.buyOrder = true;
    await this.cartServices.updateOrder(order._id, order);
    res.render("ordenGenerada", { username: req.oidc.user.nickname });
  };

  #getOrder = async (req, res) => {
    const productCart = await this.cartServices.cartUser(req.oidc.user.email);
    const order = productCart.find((el) => el.buyOrder === false);
    return order;
  };
}
