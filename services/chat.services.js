import ClassMongo from "../data/daos/mongo/mongoClass.js";
import { chatModel } from "../data/models/chat.models.js";

export default class ChatServices {
  constructor() {
    this.mongoClass = new ClassMongo(chatModel);
  }

  getAll = async (email) => {
    return await this.mongoClass.getByUser(email);
  };
  newChat = async (obj) => {
    return await this.mongoClass.create(obj);
  };
}
