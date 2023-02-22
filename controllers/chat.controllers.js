import ChatServices from "../services/chat.services.js";
import CartController from "./cart.controllers.js";

export default class ChatController {
  constructor() {
    this.chatServices = new ChatServices();
    this.cartController = new CartController();
  }

  getChat = async (req, res) => {
    res.render("chat");
  };
}
