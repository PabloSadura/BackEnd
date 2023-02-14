import ClassMongo from "../data/daos/mongo/mongoClass.js";

export default class UserServices {
  constructor() {
    this.mongoClass = new ClassMongo();
  }
}
