import { productModel } from "../db/models/productMongo.js";
export default class ContenedorProduct {
  constructor(collection) {
    this.collection = collection;
  }

  async getAll() {
    return this.collection.find();
  }

  async getById(id) {
    return this.collection.findById(id);
  }
  async create(obj) {
    return await new this.collection(obj).save();
  }

  async update(id, obj) {
    return await this.collection.updateOne({ _id: id }, { $set: obj });
  }
  async delete(id) {
    return await this.collection.deleteOne({ _id: id });
  }
}
