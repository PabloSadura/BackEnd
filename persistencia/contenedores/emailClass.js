import nodemailer from "nodemailer";
import { config } from "../../config.js";

export class Email {
  constructor() {}

  async setEmail(username, email) {
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
  }
  async emailCart(username, email, products) {
    const contentHtml = `<h1>Gracias ${username} por tu compra</h1>
        <h3>Detalles de la compra</h3>`;

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
      subject: "Detalles de la compra ",
      html: contentHtml,
    });
  }
}
