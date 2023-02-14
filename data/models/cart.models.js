import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  email: { type: String, require: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  count: { type: Number, required: true },
  description: { type: String, require: true },
  price: { type: Number, required: true },
});

export const cartModel = mongoose.model("Cart", cartSchema);
