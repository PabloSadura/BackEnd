import express from "express";
import productsRouter from "./routes/productsRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import "./db/models/productModel.js";

import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando el servidor ${PORT}`);
});
