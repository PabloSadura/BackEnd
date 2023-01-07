import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  id_username: { type: String, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  count: { type: Number, required: true },
  price: { type: Number, required: true },
});

export const cartModel = mongoose.model("Cart", cartSchema);
