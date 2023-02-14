export default class ProductosMem {
  constructor() {
    this.product = [];
  }

  async getAll() {
    return await this.product;
  }

  async create(obj) {
    const id = this.#addId();
    const newProduct = { id, ...obj };
    this.product.push(newProduct);
    return newProduct;
  }

  async getById(productId) {
    return this.product.find((el) => el.id === productId);
  }

  async deleteById(productId) {
    const index = this.#getIndex(Number(productId));
    this.product.splice(index, 1);
    return productId;
  }
  async deleteAll() {
    this.product = [];
  }
  async updateByID(productId, obj) {
    const index = this.#getIndex(productId);
    const newProduct = { ...this.product[index], ...obj };
    this.product.splice(index, 1, newProduct);
    return newProduct;
  }

  #getIndex = (id) => {
    return this.product.findIndex((el) => el.id === id);
  };

  #addId = () => {
    let id =
      this.product.length === 0
        ? 1
        : this.product[this.product.length - 1].id + 1;
    return id;
  };
}
