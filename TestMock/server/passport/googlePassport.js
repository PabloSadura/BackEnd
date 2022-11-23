import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth";
import Usuarios from "../persistencia/models/registerModel.js";

const authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};

passport.use(
  new GoogleStrategy(
    {
      consumerKey:
        "528826669079-f233ebnr8hkveus2tf7kuciar6ed20uf.apps.googleusercontent.com",
      consumerSecret: "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",
      callBackURL: "http://localhost:8080/auth/google",
      passReqToCallBack: true,
    },
    authUser
  )
);

passport.serializeUser((usuario, done) => {
  done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
  const usuarioDB = await Register.findById(id);
  done(null, usuarioDB);
});
