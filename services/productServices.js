import dao from "../persistencia/daos/factory.js";

export async function allProducts() {
  return await dao.getAll();
}
export async function createProduct() {
  return await dao.save(1);
}
export async function deleteProduct(id) {
  return await dao.delete(id);
}

export async function getById(id) {
  return await dao.getById(id);
}
