import { dbChat } from "../dbChat.js";

(async function () {
  try {
    const isTable = await dbChat.schema.hasTable("chat");
    if (!isTable) {
      await dbChat.schema.createTable("chat", (table) => {
        table.increments("id").primary().notNullable();
        table.string("email").notNullable();
        table.string("timestamp").notNullable();
        table.string("message").notNullable();
      });
      console.log("Tabla Chat creada con exito");
    }
  } catch (error) {
    console.log("Error:", error);
  }
})();
