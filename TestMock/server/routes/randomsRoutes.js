import { Router } from "express";
import { fork } from "child_process";

const randomRouter = Router();

randomRouter.get("/", (req, res) => {
  let { cant } = req.query;
  const childProcess = fork("./utils/randomNums.js");
  cant
    ? childProcess.send({ order: "start", cant })
    : childProcess.send({ order: "start", cant: 100000000 });
  childProcess.on("message", (message) => res.json({ message }));
});

export default randomRouter;
