import express from "express";
import productRoutes from "./routes/productsRoutes.js";
import dbConnect from "./persistencia/dbConfig.js";
import chatRoutes from "./routes/chatRoutes.js";
import { config } from "./config.js";
import registerRouter from "./routes/registerRoutes.js";
import session from "express-session";
import MongoStore from "connect-mongo";

// LLAMADO A PASSPORT
import passport from "passport";
import "./passport/localpassport.js";
import "./passport/googlePassport.js";
import infoRouter from "./routes/info.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keySession",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: config.MONGO_URL,
    }),
    cookie: {
      maxAge: 60000,
    },
    rolling: true,
  })
);

// Rutas
app.use("/productos", productRoutes);
app.use("/chat", chatRoutes);
app.use("/", registerRouter);
app.use("/info", infoRouter);
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
