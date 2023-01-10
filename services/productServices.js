import ProductsMongoDAO from "../persistencia/daos/productsMongoDao.js";
const productMongoDao = new ProductsMongoDAO();

export async function allProducts() {
  return await productMongoDao.getAll;
}

export async function createProduct() {
  return await productMongoDao.save(1);
}

export async function deleteProduct(id) {
  return await productMongoDao.delete(id);
}
