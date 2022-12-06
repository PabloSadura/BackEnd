import dotenv from "dotenv";

dotenv.config();
export const config = {
  GOOGLE_KEY_ID: process.env.GOOGLE_KEY_ID,
  GOOGLE_SECRET_KEY: process.env.GOOGLE_SECRET_KEY,
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.argv[2] || 8081,
  MODO: process.argv[3] || process.env.MODO,
};
