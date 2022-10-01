const express = require("express");
const productsRouter = require("./routes/productsRoutes");
const cartRouter = require("./routes/cartRoutes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando el servidor ${PORT}`);
});
