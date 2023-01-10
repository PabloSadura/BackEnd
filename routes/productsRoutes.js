import { Router } from "express";
import {
  allProducts,
  deleteOne,
  postProduct,
} from "../controllers/productController.js";
import { isAuth } from "../controllers/userController.js";

const productRoutes = Router();

productRoutes.get("/", isAuth, allProducts);

productRoutes.post("/", isAuth, postProduct);

productRoutes.delete("/:id", deleteOne);

export default productRoutes;
