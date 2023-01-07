import { Router } from "express";
import nodemailer from "nodemailer";
import { config } from "../config.js";
const emailRouter = Router();

// Email con Gmail;

emailRouter.get("/", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: "Prueba Corder <pablosadura@gmail.com>",
    to: "prueba@mail.com",
    subject: "Mail de recibimiento ",
    html: "<h1> Bienvenido a Anime FunStore</h1><p>Gracias por suscribirse</p>",
  });
  res.send("correo enviado con exito");
});

emailRouter.post("/", async (req, res) => {
  const { username, email } = req.body;
  const contentHtml = `<h1>Bienvenido ${username}</h1>
<p>Tu usuario se encuentra registrado con exito!</p>
<p>Gracias por registrarte</p>`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
  });
  await transporter.sendMail({
    from: "Prueba Corder <pablosadura@gmail.com>",
    to: email,
    subject: "Email de recibimiento ",
    html: contentHtml,
  });
  res.redirect("/registro");
});

export default emailRouter;
