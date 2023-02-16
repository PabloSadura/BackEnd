import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { config } from "./config/config.js";
import * as url from "url";

// logs
import { loggerInfo, loggerUser } from "./config/logs.js";
// Auth0
import { auth } from "express-openid-connect";
import { auth0 } from "./auth/auth.js";

// Rutas
import ProductsRouter from "./routes/products.routes.js";
import UserRouter from "./routes/user.routes.js";
import CartRouter from "./routes/cart.routes.js";

// Socket
import { Server as HttpServer } from "http";
import socketIO from "./config/socket.js";

// DB
import "./config/dbConfig.js";

const app = express();

// Instancio las rutas
const productsRouter = new ProductsRouter();
const userRouter = new UserRouter();
const cartRouter = new CartRouter();

// Instanciando Socket.io
const httpServer = new HttpServer(app);
socketIO(httpServer);

// Static
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
app.use(express.static(__dirname + "/public"));

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
app.use;

// Routes
app.use("/products", productsRouter.init());
app.use("/", userRouter.init());
app.use("/cart", cartRouter.init());

// motores de plantilla
app.set("views", "./views");
app.set("view engine", "ejs");

// Conectado Socket

const PORT = config.PORT;

httpServer.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
