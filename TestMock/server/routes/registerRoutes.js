import { Router } from "express";
import passport from "passport";

const registerRouter = Router();
const username = "";
registerRouter.get("/", (req, res) => {
  res.render("login", { username });
});

registerRouter.get("/registro", (req, res) => {
  res.render("registro", { username });
});

registerRouter.post(
  "/registro",
  passport.authenticate("registro", {
    failureRedirect: "/errorRegistro",
    successRedirect: "/productos",
  })
);

registerRouter.post(
  "/login",
  passport.authenticate("login", {
    failureRedirect: "/errorLogin",
    successRedirect: "/productos",
  })
);

registerRouter.get("/errorRegistro", (req, res) => {
  res.render("errorRegistro", { username });
});
registerRouter.get("/errorLogin", (req, res) => {
  res.render("errorLogin", { username });
});

registerRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/", { username });
  });
});

// registerRouter.get(
//   "/auth",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

// registerRouter.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     failureRedirect: "/errorRegistro",
//     successRedirect: "/productos",
//   })
// );
// registerRouter.get("/loginGoogle", (req, res) => {
//   res.render("loginGoogle");
// });

export default registerRouter;
