import ProductsFile from "./productFile/productsFile.js";
import ProductosMem from "./productMem/productsMem.js";
import { productModel } from "../models/products.models.js";
import { config } from "../../config/config.js";
import ClassMongo from "./mongo/mongoClass.js";

let dao;

const variableEntorno = config.TIPO_PERSISTENCIA;

switch (variableEntorno) {
  case "FILE":
    dao = new ProductsFile("products.txt");
    break;
  case "MEM":
    dao = new ProductosMem();
    break;
  default:
    dao = new ClassMongo(productModel);
    break;
}

export default dao;
