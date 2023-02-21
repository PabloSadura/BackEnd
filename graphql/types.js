export const types = `
type Query{
    getAllProducts: [Product]
    getById (id: String): Product
    getProducts:Order
    getOrder(email:String):Order
}
type Mutation{
    setOneProduct(input:CreateProductInput): Product
    deleteOneProduct(id: String):Product 
    updateOne(input: UpdateProductInput):Product
}
type Product{
_id: ID
title: String
description: String
price: Int
count: Int
image: String
}
type Order{
    _id:ID
    email: String
    items: [Product]
}
input CreateProductInput{
    _id: ID
    title: String
    description: String
    price: Int
    image: String
   
}
input UpdateProductInput{
id: String
product: CreateProductInput
}
`;
