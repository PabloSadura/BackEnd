import ContenedorProduct from "../../containers/productsMongo.js";
import { productModel } from "../../db/models/productMongo.js";

export default class ProductDaoMongoDB extends ContenedorProduct {
  constructor() {
    super(productModel);
  }
}
