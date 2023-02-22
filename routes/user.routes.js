import { Router } from "express";
import UserController from "../controllers/user.controllers.js";
import pkg from "express-openid-connect";
const { requiresAuth } = pkg;
const userRouter = Router();

export default class UserRouter {
  constructor() {
    this.userControllers = new UserController();
  }

  init() {
    userRouter.get("/profile", requiresAuth(), (req, res) => {
      res.send(JSON.stringify(req.oidc.user));
    });
    userRouter.get("/", requiresAuth(), this.userControllers.login);

    return userRouter;
  }
}
