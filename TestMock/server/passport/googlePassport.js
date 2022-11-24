import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth";
import { config } from "../config.js";

const authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};

passport.use(
  new GoogleStrategy(
    {
      consumerKey: config.GOOGLE_KEY_ID,

      consumerSecret: config.GOOGLE_SECRET_KEY,
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
