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
  const { username } = req.query;
  if (req.session.username === username) {
    res.json(req.session.username);
  } else {
    req.session.username = username || "";
    res.json(req.session.username);
  }
});

loginRouter.post("/auth", (req, res) => {
  for (const key in req.body) {
    req.session[key] = req.body[key];
  }
  res.json(req.session);
});

export default loginRouter;
