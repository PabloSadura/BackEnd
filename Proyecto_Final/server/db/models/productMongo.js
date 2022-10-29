import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    default: 10,
  },
  stock: {
    type: Number,
    required: true,
  },
});

export const productModel = mongoose.model("Products", productSchema);
