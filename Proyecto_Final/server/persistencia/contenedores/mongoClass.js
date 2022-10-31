import mongoose from "mongoose";

export class MongoClass {
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
    return await new this.collection.updateOne({ _id: id }, { $set: obj });
  }
  async delete(id) {
    return await new this.collection.deleteOne({ _id: id });
  }
}
