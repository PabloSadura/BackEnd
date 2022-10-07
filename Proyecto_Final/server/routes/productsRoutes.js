import { Router } from "express";
import fs from "fs";
import "../db/dbProducts.js";
import { db } from "../db/dbProducts.js";
import Product from "../products.js";

const productsRouter = Router();
const newProducts = new Product();
let products = [];

const login = true;

const middlewareLogin = (req, res, next) => {
  login ? next() : res.json({ mensaje: "No tiene permiso" });
};

// muestro los productos completos o no dependiendo de un ID
productsRouter.get("/:id?", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      const bdproduct = await newProducts.getProducts();
      res.json(bdproduct);
    } else {
      const product = await newProducts.getProductById(Number(id));
      res.json(product);
    }
  } catch (error) {
    console.log("Error:", error);
  }
});

// agrego productos dependiendo usuario admin

productsRouter.post("/", middlewareLogin, async (req, res) => {
  const { name, description, code, picture, price, stock } = req.body;
  try {
    const createProduct = await newProducts.setProduct(
      name,
      description,
      code,
      picture,
      price,
      stock
    );

    res.json({ mensaje: "producto creado con exito", product: createProduct });
  } catch (error) {
    console.log("Error:", error);
  }
});

// Modifico productos por id solo usuario admin
productsRouter.put("/:id", middlewareLogin, async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const info = await newProducts.updateProduct(Number(id), data);
    res.json({ mensaje: "producto modificado correctamente", product: info });
  } catch (error) {
    console.log("Error:", error);
  }
});

// Elimino productos por ID solo admin

productsRouter.delete("/:id", middlewareLogin, async (req, res) => {
  const { id } = req.params;
  try {
    const data = await newProducts.deteleProduct(Number(id));
    res.json({ mensaje: "Se borro correctamente", product: data });
  } catch (error) {
    console.log("Error:", error);
  }
});

export default productsRouter;
