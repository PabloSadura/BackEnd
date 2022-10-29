import { Router } from "express";
import ContenedorProduct from "../containers/productsMongo.js";
const productClass = new ContenedorProduct();
const productMongoRoutes = Router();

productMongoRoutes.get("/:id?", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const product = await productClass.listById(id);
    res.status(200).json({ product });
  } else {
    const product = await productClass.listaAll();
    if (product.length) {
      res.json({ product });
    } else {
      res.json({ mensaje: "No existen productos" });
    }
  }
});
productMongoRoutes.post("/", async (req, res) => {
  const product = req.body;
  const addProduct = productClass.addProduct(product);
  if (addProduct) {
    res.status(200).json({ mensaje: "Se agrego correctamente", product });
  } else {
    res.status(500).json({ mensaje: "No se agrego correctamente" });
  }
});

export default productMongoRoutes;
