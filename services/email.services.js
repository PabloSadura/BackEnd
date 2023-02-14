import ClassMongo from "../data/daos/Mongo/mongoClass.js";

export default class EmailServices {
  constructor() {
    this.mongoClass = new ClassMongo();
  }
}
