import { passportRegister } from "../services/userServices";

export function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.render("login", { username: "" });
  }
}

export const register = (req, res) => {
  res.render("registro", { username: "" });
};

export const login = (req, res) => {
  res.redirect("/productos");
};

export const postRegister = (req, res) => {
  passportRegister();
};
export const postLogin = (req, res) => {
  passportLogin();
};

export const errorLogin = (req, res) => {
  res.render("errorLogin", { username: "" });
};
export const errorRegister = (req, res) => {
  res.render("errorRegistro", { username: "" });
};

export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
