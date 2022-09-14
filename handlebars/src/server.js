const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const handleRouter = require("../routes/handlebarsRoute.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "public"));
app.use("/", handleRouter);

app.engine(
  "hbs",
  hbs.engine({
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views",
    extname: ".hbs",
    defaultLayout: "index.hbs",
  })
);

app.set("views", "./src/views");
app.set("view engine", "hbs");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});
