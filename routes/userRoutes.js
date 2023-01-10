import { Router } from "express";

import {
  errorLogin,
  errorRegister,
  isAuth,
  login,
  logout,
  postLogin,
  postRegister,
  register,
} from "../controllers/userController.js";
const userRouter = Router();

userRouter.get("/", isAuth, login);
userRouter.get("/registro", register);
userRouter.post("/registro", postRegister);
userRouter.post("/login", postLogin);
userRouter.get("/errorRegistro", errorRegister);
userRouter.get("/errorLogin", errorLogin);
userRouter.get("/logout", logout);

export default userRouter;
