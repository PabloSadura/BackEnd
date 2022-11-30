import { Router } from "express";

const infoRouter = Router();

infoRouter.get("/", (req, res) => {
  res.render("info", process);
});

export default infoRouter;
