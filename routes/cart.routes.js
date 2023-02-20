import { Router } from "express";
import CartController from "../controllers/cart.controllers.js";
import { cartModel } from "../data/models/cart.models.js";

const cartRouter = Router();
export default class CartRouter {
  constructor() {
    this.cartController = new CartController();
  }

  init() {
    cartRouter.get("/", this.cartController.getProducts);
    cartRouter.post("/", this.cartController.postProducts);
    cartRouter.put("/:id", this.cartController.putById);
    cartRouter.get("/delete/:id", this.cartController.deleteOneCart);
    cartRouter.get("/ordenGenerada", this.cartController.order);

    return cartRouter;
  }
}
