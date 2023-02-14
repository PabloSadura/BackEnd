import { Router } from "express";
import UserController from "../controllers/user.controllers.js";
import passport from "passport";
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
    userRouter.get("/login", this.userControllers.login);
    userRouter.get("/signup", this.userControllers.register);
    userRouter.post("/signup", this.userControllers.signup);
    userRouter.get("loginError", this.userControllers.loginError);
    userRouter.post("/logout", this.userControllers.logout);
    return userRouter;
  }
}
