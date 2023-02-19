import CartServices from "../services/cart.services.js";
import ProductServices from "../services/products.services.js";

export default class CartController {
  constructor() {
    this.cartServices = new CartServices();
  }

  getProducts = async (req, res) => {
    const productCart = await this.cartServices.cartUser(req.oidc.user.email);
    const total = productCart.reduce((acc, el) => acc + el.price, 0);
    res.render("cart", {
      username: req.oidc.user.nickname,
      productCart,
      total: total,
    });
  };

  postProducts = async (req, res) => {
    const { id } = req.body;
    const productServices = new ProductServices();
    const product = await productServices.getById(id);
    const { title, image, price, description } = product;
    const productCart = {
      email: req.oidc.user.email,
      title: title,
      count: 1,
      image: image,
      description: description,
      price: price,
    };
    this.cartServices.createCart(productCart);
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
    const products = await this.cartServices.cartUser(req.oidc.user.email);
    // sendMail(req.oidc.user.nickname, req.oidc.user.email, products);
    this.cartServices.deleteAllCart(req.oidc.email);
    res.render("ordenGenerada", { username: req.oidc.user.nickname });
  };
}
