export default class ProductDaoMen {
  constructor() {
    this.product = [];
  }

  async getAll() {
    return this.product;
  }

  async save(product) {
    const id = this.#addId();
    const newProduct = { id, ...product };
    await this.product.push(product);
    return newProduct;
  }

  async getById(productId) {
    return this.product.find((el) => el.id === productId);
  }

  async deleteById(productId) {
    const index = this.#getIndex(productId);
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
