import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import Usuarios from "../persistencia/models/usuario.js";
import { Email } from "../persistencia/contenedores/emailClass.js";
import { loggerInfo } from "../logs.js";
const emailRegistro = new Email();
passport.use(
  "registro",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { email, name, age, phone, avatar } = req.body;
      const usuarioDB = await Usuarios.find({ username });
      if (usuarioDB.length > 0) {
        return done(null, false);
      } else {
        const usuario = new Usuarios();
        (usuario.username = username),
          (usuario.password = password),
          (usuario.email = email);
        emailRegistro.setEmail(username, email);
        loggerInfo.info();
        usuario.save();
        done(null, usuario);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const usuarioDB = await Usuarios.find({ username, password });
      if (usuarioDB.length === 0) {
        return done(null, false);
      }
      loggerInfo.info();
      done(null, usuarioDB);
    }
  )
);

passport.serializeUser((usuario, done) => {
  done(null, usuario);
});

passport.deserializeUser(async (id, done) => {
  const usuarioDB = await Usuarios.findById(id);
  done(null, usuarioDB);
});
