import { Router } from "express";
import {
  deleteOneCart,
  getProducts,
  order,
  postProducts,
  putById,
} from "../controllers/cartController.js";
const cartRouter = Router();

cartRouter.get("/", getProducts);
cartRouter.post("/", postProducts);
cartRouter.put("/:id", putById);
cartRouter.get("/delete/:id", deleteOneCart);
cartRouter.get("/ordenGenerada", order);

export default cartRouter;
