import { Router } from "express";
import ProductsController from "../controllers/products.controllers.js";

const productRouter = Router();

export default class ProductsRouter {
  constructor() {
    this.productsController = new ProductsController();
  }

  init() {
    productRouter.get("/", this.productsController.getAllProducts);
    productRouter.post(
      "/agregarProducto",
      this.productsController.setOneProduct
    );
    productRouter.get(
      "/agregarProducto",
      this.productsController.createProduct
    );
    productRouter.get("/:id", this.productsController.getById);
    productRouter.get(
      "/deleteProduct/:id",
      this.productsController.deleteOneProduct
    );
    productRouter.get("/editProduct/:id", this.productsController.editOne);
    productRouter.post("/editProduct/:id", this.productsController.updateOne);
    return productRouter;
  }
}
