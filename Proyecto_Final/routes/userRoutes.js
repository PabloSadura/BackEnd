import { Router } from "express";
import passport from "passport";

const userRouter = Router();

export function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("login", { username: "" });
  }
}
userRouter.get("/", isAuth, (req, res) => {
  res.redirect("/productos");
});
userRouter.get("/registro", (req, res) => {
  res.render("registro", { username: "" });
});

userRouter.post(
  "/registro",
  passport.authenticate("registro", {
    failureRedirect: "/errorRegistro",
    successRedirect: "/productos",
  })
);

userRouter.post(
  "/login",
  passport.authenticate("login", {
    failureRedirect: "/errorLogin",
    successRedirect: "/productos",
  })
);

userRouter.get("/errorRegistro", (req, res) => {
  res.render("errorRegistro", { username: "" });
});
userRouter.get("/errorLogin", (req, res) => {
  res.render("errorLogin", { username: "" });
});

userRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

export default userRouter;
