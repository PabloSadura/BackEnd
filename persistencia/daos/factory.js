import ChatDaoFile from "./chatDaoFile/chatDaoFile.js";
import ProductDaoMen from "./productDaoMem/productsDaoMem.js";

let dao;

const variableEntorno = process.argv[2];

switch (variableEntorno) {
  case "file":
    dao = "";
    break;

  default:
    dao = "";
    break;
}

export default dao;
