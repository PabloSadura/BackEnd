import express from "express";
import loginRouter from "./routes/loginRoutes.js";
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
app.use("/login", loginRouter);

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
