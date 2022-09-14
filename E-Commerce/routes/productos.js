const { Router } = require("express");

const router = Router();
const products = [];
const error = { error: "Producto no encontrado" };
let id = 0;

router.get("/", (req, res) => {
  res.json({ products });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const productById = products.find((el) => el.id == Number(id));
    res.status(200).json(productById);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const productById = products.find((el) => el.id == Number(id));
  if (productById) {
    productById.title = req.body.title;
    productById.price = req.body.price;
    productById.fileMulter = req.body.fileMulter;
    res.status(200).send("Producto Modificado");
  } else {
    res.send(error);
  }
});

router.post("/", (req, res) => {
  const product = req.body;
  id++;
  try {
    products.push({ id: id, ...product });
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const productById = products.find((el) => el.id == Number(id));
  if (productById) {
    const index = products.findIndex((el) => el.id == Number(id));
    products.splice(index, 1);
    res.status(200).send(`Se elimino correctamente el id ${id}`);
  } else {
    res.status(500).send(error);
  }
});

module.exports = router;
