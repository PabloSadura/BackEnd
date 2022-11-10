import { MongoClass } from "../contenedores/mongoClass.js";
import { loginModel } from "../models/loginModel.js";

class LoginMongoDAO extends MongoClass {
  constructor() {
    super(loginModel);
  }
}

export default LoginMongoDAO;
