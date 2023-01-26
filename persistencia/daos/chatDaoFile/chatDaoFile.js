import fs from "fs";

export default class ChatDaoFile {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    const chat = await this.#readFile();
    return chat;
  }

  async save(chat) {}

  async getById(chatId) {
    const chat = await this.#readFile();
    const chatByid = chat.find((el) => el.id === chatId);
    return chat;
  }

  async deleteById(productId) {}
  async deleteAll() {}
  async updateByID(productId, obj) {}

  #readFile = async () => {
    if (fs.existsSync(this.path)) {
      const chatFile = await fs.promises.readFile(this.path, "utf-8");
      return chatFile;
    }
    return [];
  };

  #getIndex = async (id) => {
    const chat = await this.#readFile();
    return chat.findIndex((el) => el.id === id);
  };

  #addId = async () => {
    let id;
    const chat = await this.#readFile();
    chat.length === 0 ? (id = 1) : (id = chat[chat.length - 1].id + 1);
    return id;
  };
}
