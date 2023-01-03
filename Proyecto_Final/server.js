import express, { urlencoded } from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import userRouter from "./routes/userRoutes.js";
import productRoutes from "./routes/productsRoutes.js";
import "./persistencia/dbConfig.js";

// passport
import passport from "passport";
import "./passport/localpassport.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "secretKey",
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority",
    }),
  })
);

// inicializar passport
app.use(passport.initialize());
app.use(passport.session());
// routes

app.use("/", userRouter);
app.use("/productos", productRoutes);

// motores de plantilla
app.set("views", "./views");
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
