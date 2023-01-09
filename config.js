import dotenv from "dotenv";

dotenv.config();
export const config = {
  GOOGLE_KEY_ID: process.env.GOOGLE_KEY_ID,
  GOOGLE_SECRET_KEY: process.env.GOOGLE_SECRET_KEY,
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT || 8081,
  MODO: process.argv[3] || process.env.MODO,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};
