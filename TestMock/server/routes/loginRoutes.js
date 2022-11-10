import { Router } from "express";
import LoginMongoDAO from "../persistencia/daos/loginDAO.js";
import session from "express-session";
import MongoStore from "connect-mongo";
const loginRouter = Router();
const loginMongo = new LoginMongoDAO();

loginRouter.use(
  session({
    secret: "mongoKey",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority",
    }),
    cookie: { maxAge: 30000 },
  })
);

loginRouter.get("/", async (req, res) => {
  const data = await loginMongo.getAll();
  if (data.length) {
    res.json({ data });
  } else {
    res.json({ message: "No hay usuarios conectados" });
  }
});

loginRouter.post("/", (req, res) => {
  const { name } = req.body;

  for (const key in req.body) {
    req.session[key] = req.body[key];
  }

  res.json({ message: req.session });
});

export default loginRouter;
