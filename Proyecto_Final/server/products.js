import "./db/dbProducts.js";
import { db } from "./db/dbProducts.js";
export default class Product {
  constructor() {
    this.name = "";
    this.description = "";
    this.price = Number();
    this.stock = Number();
    this.code = "";
  }

  getProducts = () => {
    return db.from("products").select("*");
  };
  getProductById = (id) => {
    return db.from("products").where("id", id).select("*");
  };
  setProduct = (name, description, price, stock, code, picture) => {
    const timestamp = Date();
    return db.from("products").insert({
      name,
      timestamp,
      description,
      code,
      picture,
      price,
      stock,
    });
  };
  updateProduct = (id, obj) => {
    const { name, price, picture, stock, description } = obj;
    return db
      .from("products")
      .where("id", id)
      .update({ name, price, picture, stock, description });
  };
  deteleProduct = (id) => {
    return db.from("products").where("id", id).del();
  };
}
