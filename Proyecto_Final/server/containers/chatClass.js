import { dbChat } from "../db/dbChat.js";

export default class Chat {
  constructor() {
    this.email = "";
    this.timestamp = "";
    this.message = "";
  }

  getMessage = () => {
    return dbChat.from("chat").select("*");
  };
  setMessage = (obj) => {
    const { email, message } = obj;
    const timestamp = Date();
    return dbChat.from("chat").insert({ email, timestamp, message });
  };
  deleteMessage = (id) => {
    return dbChat.from("chat").where("id", id).del();
  };
}
