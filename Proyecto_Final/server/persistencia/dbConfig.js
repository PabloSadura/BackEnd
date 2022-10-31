import mongoose from "mongoose";

export default async function dbConnect() {
  const URL =
    "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority";

  mongoose.connect(URL);
}
