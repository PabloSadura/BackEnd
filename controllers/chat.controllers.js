import ChatServices from "../services/chat.services.js|";

export default class ChatController {
  constructor() {
    this.chatServices = new ChatServices();
  }
}
