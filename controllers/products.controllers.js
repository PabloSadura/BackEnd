import ProductsServices from "../services/products.services.js";

export default class ProductsController {
  constructor() {
    this.productsService = new ProductsServices();
  }

  getAllProducts = async (req, res) => {
    try {
      const products = await this.productsService.getAllProducts();
      res.render("productos", { username: req.oidc.user.nickname, products });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  setOneProduct = async (req, res) => {
    console.log(req.body);
    try {
      await this.productsService.setOneProduct({ ...req.body, count: 1 });
      res.status(200).reder("productos");
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  getById = async (req, res) => {
    const { id } = req.params;
    const product = await this.productsService.getById(id);
    res.json({ product });
  };
  deleteOneProduct = async (req, res) => {
    const { id } = req.params;
    await this.productsService.deleteById(id);
    res.render("productos", { username: req.oidc.user.nickname, products });
  };
  updateOne = async (req, res) => {
    const { id } = req.params;
    const product = await this.productsService.updateById(id, req.body);
    res.render("productos", { username: req.oidc.user.nickname });
  };
  createProduct = (req, res) => {
    res.render("agregarProducto", {
      username: req.oidc.user.nickname,
    });
  };
  editOne = async (req, res) => {
    const { id } = req.params;
    const product = await this.productsService.getById(id);
    res.render("editarProducto", { username: req.oidc.user.nickname, product });
  };
}
