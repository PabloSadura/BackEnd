import { Types } from "mongoose";
import { MongoClass } from "../contenedores/mongoClass.js";
import { cartModel } from "../models/cart.js";

class CartMongoDao extends MongoClass {
  constructor() {
    super(cartModel);
  }
}

export default CartMongoDao;
