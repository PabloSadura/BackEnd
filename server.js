import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { auth } from "express-openid-connect";
import { auth0 } from "./auth/auth.js";
import { config } from "./config/config.js";
import ProductsRouter from "./routes/products.routes.js";
import UserRouter from "./routes/user.routes.js";
import CartRouter from "./routes/cart.routes.js";
import "./config/dbConfig.js";

const app = express();

// Instancio las rutas
const productsRouter = new ProductsRouter();
const userRouter = new UserRouter();
const cartRouter = new CartRouter();

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

app.use(auth(auth0));

// Routes
app.use("/products", productsRouter.init());
app.use("/", userRouter.init());
app.use("/cart", cartRouter.init());

// motores de plantilla
app.set("views", "./views");
app.set("view engine", "ejs");

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
