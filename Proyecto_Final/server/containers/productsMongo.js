import { productModel } from "../db/models/productMongo.js";
export default class ContenedorProduct {
  constructor(ruta) {
    this.ruta = ruta;
  }
  async listById(id) {
    const product = await productModel.findById(id);
    return product;
  }
  async listaAll() {
    const product = await productModel.find({});
    return product;
  }
  async addProduct(product) {
    const isOk = await new productModel(product).save();
    return isOk;
  }
  //   async deleteProduct(id) {

  //   }
}
