import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  googleId: String,
});

export default mongoose.model("usuarios", registerSchema);
