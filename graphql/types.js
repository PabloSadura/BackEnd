export const types = `
type Query{
    getAllProducts: [Product]
    getById (id: Int): Product
}
type Mutation{
    setOneProduct(input:CreateProductInput): Product
    deleteOneProduct(id: Int):Product 
    updateOne(input: UpdateProductInput):Product
}
type Product{
id: ID
name: String
price: Int
stock: Int
img: String
}
input CreateProductInput{
    id: ID
    name: String
    price: Int
    stock: Int
   
}
input UpdateProductInput{
id: Int
product: CreateProductInput
}
`;
