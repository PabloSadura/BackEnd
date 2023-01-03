import { Router } from "express";
import passport from "passport";

const userRouter = Router();

export function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("login");
  }
}
userRouter.get("/", isAuth, (req, res) => {
  res.redirect("/productos");
});
userRouter.get("/registro", (req, res) => {
  res.render("registro");
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
  res.render("errorRegistro");
});
userRouter.get("/errorLogin", (req, res) => {
  res.render("errorLogin");
});

userRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

export default userRouter;
