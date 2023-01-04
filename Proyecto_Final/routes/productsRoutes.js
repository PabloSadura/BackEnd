import { Router } from "express";
import ProductsMongoDAO from "../persistencia/daos/productsMongoDao.js";
import { isAuth } from "./userRoutes.js";

const productRoutes = Router();
const productsMongo = new ProductsMongoDAO();

productRoutes.get("/", isAuth, async (req, res) => {
  const products = await productsMongo.getAll();
  res.render("productos", { username: req.user.username, products });
});

productRoutes.post("/", async (req, res) => {
  const createProduct = await productsMongo.save(1);
  res.json({ response: "Producto creados con exito", product: createProduct });
});

productRoutes.post("/popular", async (req, res) => {
  const { cant } = req.query;
  const max = cant || 50;
  const createProduct = await productsMongo.save(max);
  res.json({ response: "Productos creados con exito", product: createProduct });
});

productRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await productsMongo.delete(id);
    res.json({
      response: "Producto Eliminado con Exitos",
      product: deleteProduct,
    });
  } catch (error) {
    console.log(error);
  }
});

export default productRoutes;
