import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  email: { type: String, require: true },
  items: [
    {
      _id: false,
      id: String,
      title: String,
      description: String,
      count: Number,
      price: Number,
    },
  ],
  buyOrder: Boolean,
});

export const cartModel = mongoose.model("Cart", cartSchema);
