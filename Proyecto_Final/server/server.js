import express from "express";
import session from "express-session";
import passport from "passport";
import MongoStore from "connect-mongo";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8081;

app.use(
  session({
    secret: "keySession",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority",
    }),
    cookie: {
      maxAge: 60000,
    },
    rolling: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: "GET, PUT, POST, DELETE",
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
