import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  username: String,
  email: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
