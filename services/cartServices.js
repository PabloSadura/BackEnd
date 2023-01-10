// llamo a persistencias DAO

import CartMongoDao from "../persistencia/daos/cartMongoDao.js";
const cartMongoDao = new CartMongoDao();

export async function cartUser(user) {
  return cartMongoDao.getByUser(user);
}
