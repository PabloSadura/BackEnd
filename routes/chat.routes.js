import { Router } from "express";
import ChatController from "../controllers/chat.controllers.js";
const chatRouter = Router();

export default class ChatRouter {
  constructor() {
    this.chatController = new ChatController();
  }
  init() {
    chatRouter.get("/", this.chatController.chat);
    chatRouter.post("/history", this.chatController.getChat);
    chatRouter.post("/newMessage", this.chatController.newChat);
    return chatRouter;
  }
}
