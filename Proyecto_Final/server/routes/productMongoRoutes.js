import { Router } from "express";
import ProductDaoMongoDB from "../daos/productos/ProductosDaoMongoDB.js";
const productClass = new ProductDaoMongoDB();
const productMongoRoutes = Router();

productMongoRoutes.get("/:id?", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const product = await productClass.getById(id);
    product
      ? res.status(200).json({ product })
      : res.status(500).json({ mensaje: "NO existe producto" });
  } else {
    const product = await productClass.getAll();
    if (product.length) {
      res.json({ product });
    } else {
      res.json({ mensaje: "No existen productos" });
    }
  }
});
productMongoRoutes.post("/", async (req, res) => {
  const product = req.body;
  const addProduct = productClass.create(product);
  if (addProduct) {
    res.status(200).json({ mensaje: "Se agrego correctamente", product });
  } else {
    res.status(500).json({ mensaje: "No se agrego correctamente" });
  }
});

productMongoRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = productClass.delete(id);
  product
    ? res.status(200).json({ mensaje: "Producto elminado con exito" })
    : res.status(500).json({ mensaje: "El producto no se pudo eliminar" });
});

export default productMongoRoutes;
