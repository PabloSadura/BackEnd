import { createProduct, deleteProduct } from "../services/productServices.js";

export const allProducts = (req, res) => {
  res.render("productos", { username: req.user.username, products });
};

export const postProduct = async (req, res) => {
  const product = await createProduct();
  res.json({ response: "Producto creados con exito", product: product });
};

export const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await deleteProduct(id);
    res.json({
      response: "Producto Eliminado con Exitos",
      product: deleteProduct,
    });
  } catch (error) {}
};
