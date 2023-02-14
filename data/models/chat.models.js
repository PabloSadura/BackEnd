import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  email: { type: String, required: true },
  comments: { type: String, required: true },
});

export const chatModel = mongoose.model("Products", chatSchema);
