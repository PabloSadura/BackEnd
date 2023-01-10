import { Email } from "../persistencia/contenedores/emailClass";

const emailCart = new Email();

export async function sendMail(user, mail, product) {
  emailCart.emailCart(user, mail, product);
}
