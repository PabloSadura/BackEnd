// llamo a persistencias DAO

import CartMongoDao from "../persistencia/daos/cartMongoDao.js";
const cartMongoDao = new CartMongoDao();

export async function cartUser(user) {
  return cartMongoDao.getByUser(user);
}

export async function createCart(obj) {
  return cartMongoDao.create(obj);
}

export async function updateOne(id, body) {
  cartMongoDao.update(id, body);
}

export async function deleteOneinCart(id) {
  cartMongoDao.delete(id);
}

export async function deleteAllCart(user) {
  cartMongoDao.deleteAllCart(user);
}
