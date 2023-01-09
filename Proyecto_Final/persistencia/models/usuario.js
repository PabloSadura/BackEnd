import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  address: String,
  age: Number,
  phone: Number,
  avatar: String,
});

export default mongoose.model("usuarios", usuarioSchema);
