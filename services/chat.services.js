import ClassMongo from "../data/daos/Mongo/mongoClass.js";

export default class ChatServices {
  constructor() {
    this.mongoClass = new ClassMongo();
  }
}
