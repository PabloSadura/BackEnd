import passport from "passport";

export async function passportRegister() {
  passport.authenticate("registro", {
    failureRedirect: "/errorRegistro",
    successRedirect: "/productos",
  });
}

export async function passportLogin() {
  passport.authenticate("login", {
    failureMessage: false,
    successMessage: true,
  });
}
