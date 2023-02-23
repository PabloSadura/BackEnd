import ChatServices from "../services/chat.services.js";

export default class ChatController {
  constructor() {
    this.chatServices = new ChatServices();
  }
  chat = (req, res) => {
    res.render("chat", { chats: [] });
  };
  getChat = async (req, res) => {
    const { email } = req.body;
    const chats = await this.chatServices.getAll(email);
    res.render("chat", { chats: chats });
  };
  newChat = async (req, res) => {
    console.log(rq.body);
    await this.chatServices.newChat(req.body);
    res.json({ message: "Mensaje Guardado" });
  };
}
