import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const loginModel = mongoose.model("Session", loginSchema);
