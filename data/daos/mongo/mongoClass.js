export default class ClassMongo {
  constructor(collection) {
    this.collection = collection;
  }

  async getAll() {
    return await this.collection.find();
  }

  async getById(id) {
    return await this.collection.findOne({ _id: id });
  }
  async create(obj) {
    return await this.collection(obj).save();
  }

  async updateById(id, obj) {
    return await this.collection.updateOne({ _id: id }, { $set: obj });
  }
  async deleteById(id) {
    return await this.collection.deleteOne({ _id: id });
  }
  async delteAll() {
    return await this.collection.deleteMany();
  }
  async getByUser(user) {
    return await this.collection.find({ email: user });
  }
  async deleteAllCart(user) {
    return await this.collection.deleteMany({ email: user });
  }
  async updateCart(email, obj) {
    return await this.collection.update(
      { email: email },
      { $push: { items: obj } }
    );
  }
}
