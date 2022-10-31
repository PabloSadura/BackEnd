import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  author: {
    id: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: false,
    },
    apellido: {
      type: String,
      required: false,
    },
    edad: {
      type: Number,
      required: false,
    },
    alias: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  text: {
    type: String,
    required: true,
  },
});

export const chatModel = mongoose.model("Chat", chatSchema);
