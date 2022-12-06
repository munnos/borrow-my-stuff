const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type ShopCategory {
    _id: ID
    name: String
  }

  type ShopProduct {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: ShopCategory
  }

  type ShopOrder {
    _id: ID
    purchaseDate: String
    products: [ShopProduct]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [ShopOrder]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [ShopCategory]
    products(category: ID, name: String): [ShopProduct]
    product(_id: ID!): ShopProduct
    user: User
    order(_id: ID!): ShopOrder
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): ShopOrder
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): ShopProduct
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
