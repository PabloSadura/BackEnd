import { MongoClass } from "../contenedores/mongoClass.js";
import { chatModel } from "../models/chatModel.js";

class ChatMongoDAO extends MongoClass {
  constructor() {
    super(chatModel);
  }

  async saveChat(obj) {
    const chatResponse = [];
    const chatCreated = await this.create(obj);
    chatResponse.push(chatCreated);
    return chatResponse;
  }

  async normalizeChat() {
    const chatresponse = [];
    const data = this.getAll();
  }
}

export default ChatMongoDAO;
