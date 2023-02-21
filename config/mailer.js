import nodemailer from "nodemailer";
import { config } from "./config.js";
import ejs from "ejs";
import * as url from "url";

export class OrderEmail {
  constructor() {}

  async orderEmail(email, order) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: config.EMAIL,
        pass: config.PASSWORD,
      },
    });

    transporter.sendMail({
      from: "Medicina Estetica <pablosadura@gmail.com>",
      to: email,
      subject: `Orden de compra N° ${order._id}`,
      html: `<h3>Gracias por su compra</h3>
        <a href="http://localhost:8080">Vuelva Pronto!</a>
      `,
    });
  }
}
