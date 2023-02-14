import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ecommerce:coderhouse@cluster0.qrpyisw.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then((db) => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));
