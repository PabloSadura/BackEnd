import { MongoClass } from "../contenedores/mongoClass.js";
import { productsModel } from "../models/products.js";
import { mockProducts } from "../../utils/mocks.js";

export default class ProductsMongoDAO extends MongoClass {
  constructor() {
    super(productsModel);
  }
}
