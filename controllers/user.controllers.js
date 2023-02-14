import UserServices from "../services/user.services.js";
import passport from "passport";

export default class UserController {
  constructor() {
    this.userServices = new UserServices();
  }

  register = async (req, res) => {
    res.render("signup", { username: "" });
  };

  login = async (req, res) => {
    if (req.oidc.isAuthenticated()) {
      res.redirect("/products");
    }
  };

  signup = async (req, res) => {
    this.userServices.signup();
  };

  loginError = (req, res) => {
    res.render("errorLogin");
  };

  logout = (req, res) => {
    req.session.destroy(() => {
      res.redirect("/");
    });
  };
}
