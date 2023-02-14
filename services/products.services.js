import dao from "../data/daos/factory.js";

export default class ProductsServices {
  constructor() {
    this.dao = dao;
  }

  getAllProducts = async () => {
    const products = await this.dao.getAll();
    return products;
  };
  setOneProduct = async (obj) => {
    const product = await this.dao.create(obj);
    return product;
  };
  getById = async (id) => {
    const product = await this.dao.getById(id);
    return product;
  };
  deleteById = async (id) => {
    const product = await this.dao.deleteById(id);
    return product;
  };
  deleteAll = async () => {
    const products = this.dao.deleteAll();
    return products;
  };
  updateById = async (id, obj) => {
    const product = await this.dao.updateById(id, obj);
    return product;
  };
}
