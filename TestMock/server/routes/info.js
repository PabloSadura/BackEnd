import { Router } from "express";

const infoRouter = Router();

infoRouter.get("/", (req, res) => {
  res.render("info", process);
});
console.log(process.cpuUsage());

export default infoRouter;
