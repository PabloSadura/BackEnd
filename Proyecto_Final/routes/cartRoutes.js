import { Router } from "express";
const cartRouter = Router();

cartRouter.get("/", (req, res) => {
  res.render("cart");
});
cartRouter.post("/", (req, res) => {
  console.log(req.body);
  res.render("cart");
});

export default cartRouter;
