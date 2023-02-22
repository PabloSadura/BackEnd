import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
  email: { type: String, required: true },
  messages: { type: String, require: true },
});

export const chatModel = mongoose.model("Chat", chatSchema);
