import express from "express";
import productRoutes from "./routes/productsRoutes.js";
import dbConnect from "./persistencia/dbConfig.js";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/products", productRoutes);
app.use("/chat", chatRoutes);
const PORT = process.env.PORT || 8080;

try {
  await dbConnect();
  console.log("Conectado a Base de Datos");
  app.listen(PORT, () => {
    console.log(`Escuchando el servidor ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
