import express from "express";
import productRoutes from "./routes/productsRoutes.js";
import dbConnect from "./persistencia/dbConfig.js";
import chatRoutes from "./routes/chatRoutes.js";
import { config } from "./config.js";
import registerRouter from "./routes/registerRoutes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import compression from "compression";
import log4js from "log4js";

// LLAMADO A PASSPORT
import passport from "passport";
import "./passport/localpassport.js";
import "./passport/googlePassport.js";
import infoRouter from "./routes/info.js";
import randomRouter from "./routes/randomsRoutes.js";
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
app.use("info", infoRouter);
app.use("/infozip", compression(), infoRouter);
app.use("/api/randoms", randomRouter);

// Motores de Plantilla

app.set("views", "./views");
app.set("view engine", "ejs");

// Inicializar passport
app.use(passport.initialize());
app.use(passport.session());

// Logger con log4js

log4js.configure({
  appenders: {
    myConsole: { type: "console" },
    myFile: { type: "file", filename: "warm.log" },
    myFile2: { type: "file", filename: "error.log" },
  },
  categories: {
    default: { appenders: ["myConsole"], level: "trace" },
    consola: { appenders: ["myConsole"], level: "debug" },
    archivo: { appenders: ["myFile"], level: "all" },
    error: { appenders: ["myFile2"], level: "error" },
  },
});

const loggerInfo = log4js.getLogger();
const loggerError = log4js.getLogger("error");
const loggerWarm = log4js.getLogger("archivo");
const PORT = config.PORT;


// Servidor

try {
  await dbConnect();
  console.log("Conectado a Base de Datos");
  app.listen(PORT, () => {
    console.log(`Escuchando el servidor ${PORT}`);
    loggerInfo.info("Info de logs");
    loggerWarm.warn("Algo esta fallando");
  });
} catch (error) {
  loggerError.error(error);
}
