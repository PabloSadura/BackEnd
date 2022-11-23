import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

export default mongoose.model("register", registerSchema);
