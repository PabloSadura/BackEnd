import nodemailer from "nodemailer";
import { config } from "../../../config/config.js";

export class EmailRegistro {
  async orderEmail(email, products) {
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
}
