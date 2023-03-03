import ClassMongo from "../data/daos/mongo/mongoClass.js";
import { cartModel } from "../data/models/cart.models.js";
export default class CartServices {
  constructor() {
    this.mongoClass = new ClassMongo(cartModel);
  }

  async cartUser(email) {
    return this.mongoClass.getByUser(email);
  }

  async createCart(obj) {
    return this.mongoClass.create(obj);
  }

  async updateOne(email, obj) {
    this.mongoClass.updateCart(email, obj);
  }
  async updateOrder(id, obj) {
    this.mongoClass.updateById(id, obj);
  }

  async deleteOrderById(id, order) {
    return this.mongoClass.deleteOrderById(id, order);
  }

  async deleteAllCart(user) {
    this.mongoClass.deleteAllCart(user);
  }
}
