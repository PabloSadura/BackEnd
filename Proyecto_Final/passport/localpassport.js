import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import Usuarios from "../persistencia/models/usuario.js";
import { EmailRegistro } from "../persistencia/contenedores/emailClass.js";
const emailRegistro = new EmailRegistro();
passport.use(
  "registro",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { email } = req.body;
      const usuarioDB = await Usuarios.find({ username });
      if (usuarioDB.length > 0) {
        return done(null, false);
      } else {
        const usuario = new Usuarios();
        (usuario.username = username),
          (usuario.password = password),
          emailRegistro.setEmail(username, email);
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
