import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

export const productModel = mongoose.model("Products", productSchema);
