import express from "express";
import { dbConfig } from "./db/dbmongo.js";

import productsRouter from "./routes/productsRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import productMongoRoutes from "./routes/productMongoRoutes.js";
import "./db/models/chatModel.js";
import "./db/models/productModel.js";

import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/chat", chatRouter);
app.use("/api/productMongo", productMongoRoutes);

const PORT = process.env.PORT || 8080;

try {
  await dbConfig();
  app.listen(PORT, () => {
    console.log(`Escuchando el servidor ${PORT}`);
  });
} catch (error) {}
