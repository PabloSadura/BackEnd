import mongoose from "mongoose";

export async function dbConfig() {
  const URL =
    "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority";

  mongoose
    .connect(URL)
    .then((res) => console.log("Conectado a Atlas"))
    .catch((error) => console.log(error));
}
