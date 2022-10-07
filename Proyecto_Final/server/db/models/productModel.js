import { db } from "../dbProducts.js";

(async function () {
  try {
    const isTable = await db.schema.hasTable("products");
    if (!isTable) {
      await db.schema.createTable("products", (table) => {
        table.increments("id").primary().notNullable();
        table.string("timestamp");
        table.string("name").notNullable();
        table.string("description");
        table.string("code");
        table.string("picture");
        table.float("price").notNullable();
        table.integer("stock").notNullable();
      });
    }
    console.log("tabla creada con exito");
  } catch (error) {
    console.log(error);
  }
})();
