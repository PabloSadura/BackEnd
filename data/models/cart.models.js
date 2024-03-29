import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  email: { type: String, require: true },
  items: [
    {
      title: String,
      description: String,
      count: Number,
      price: Number,
    },
  ],
  date: Date,
  buyOrder: Boolean,
});

export const cartModel = mongoose.model("Cart", cartSchema);
