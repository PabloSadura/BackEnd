import knex from "knex";

const config = {
  client: "sqlite3",
  connection: {
    filename: "./db/dbChat",
  },
  useNullAsDefault: true,
};

export const dbChat = knex(config);
