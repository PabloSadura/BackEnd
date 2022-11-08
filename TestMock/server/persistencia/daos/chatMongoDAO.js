import { MongoClass } from "../contenedores/mongoClass.js";
import { chatModel } from "../models/chatModel.js";
import { normalize, schema } from "normalizr";

const authorEntity = new schema.Entity("author", { idAtribute: "email" });
const textEntity = new schema.Entity("text", {
  author: authorEntity,
});
const messageEntity = new schema.Entity("message", {
  post: [textEntity],
});

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
    const data = await this.getAll();
    const chatResponse = { id: 1000, post: [...data] };
    const chatNormalizado = normalize(chatResponse, messageEntity);
    return chatNormalizado;
  }
}

export default ChatMongoDAO;
