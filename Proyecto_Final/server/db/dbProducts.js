import knex from "knex";

const config = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "databackend",
  },
  pool: { min: 0, max: 10 },
};

export const db = knex(config);
