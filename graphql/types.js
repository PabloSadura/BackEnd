export const types = `
type Query{
    getAllProducts: [Product]
    getById (id: String): Product
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
image: String
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
