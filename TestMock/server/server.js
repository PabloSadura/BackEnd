import express from "express";
import productRoutes from "./routes/productsRoutes.js";
import dbConnect from "./persistencia/dbConfig.js";
import chatRoutes from "./routes/chatRoutes.js";

import registerRouter from "./routes/registerRoutes.js";
import session from "express-session";
import MongoStore from "connect-mongo";

// LLAMADO A PASSPORT
import passport from "passport";
import "./passport/localpassport.js";
import "./passport/googlePassport.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keySession",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority",
    }),
  })
);

// Rutas
app.use("/productos", productRoutes);
app.use("/chat", chatRoutes);
app.use("/", registerRouter);

// Motores de Plantilla

app.set("views", "./views");
app.set("view engine", "ejs");

// Inicializar passport
app.use(passport.initialize());
app.use(passport.session());

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
