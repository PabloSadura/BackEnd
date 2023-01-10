import { Router } from "express";
import {
  deleteOne,
  listAll,
  postProduct,
} from "../controllers/productController.js";
import { isAuth } from "../controllers/userController.js";

const productRoutes = Router();

productRoutes.get("/", isAuth, listAll);
productRoutes.post("/", isAuth, postProduct);
productRoutes.delete("/:id", deleteOne);

export default productRoutes;
