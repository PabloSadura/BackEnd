import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import Register from "../persistencia/models/registerModel.js";

passport.use(
  "registro",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const usuarioDB = await Register.findOne({ username });
      if (usuarioDB) {
        return done(null, false);
      } else {
        const usuario = new Register();
        usuario.username = username;
        usuario.password = password;
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
      const usuarioDB = await Register.findOne({ username, password });
      if (!usuarioDB) {
        return done(null, false);
      }
      done(null, usuarioDB);
    }
  )
);

passport.serializeUser((usuario, done) => {
  done(null, usuario._id);
});

passport.deserializeUser(async (id, done) => {
  const usuarioDB = await Register.findById(id);
  done(null, usuarioDB);
});
