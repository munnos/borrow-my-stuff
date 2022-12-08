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

  type ListingProduct {
    _id: ID
    name: String
    description: String
    image: String
    category: ListingCategory
    borrowDuration: String
    user: User
    listingDate: String
  }

  type ListingCategory {
    _id: ID
    name: String
    image: String
  }

  type ListingRequest {  
    _id: ID  
    listingProduct: ListingProduct
    requestee: User
    dateRequested: String
    duration: String
    approved: Boolean
    active: Boolean
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

  input categoryInput {
    _id: ID !
    name: String
  }

  input userInput {
    _id: ID!
    name: String
    
  }



  type Query {
    categories: [ShopCategory]
    products(category: ID, name: String): [ShopProduct]
    product(_id: ID!): ShopProduct
    user: User
    order(_id: ID!): ShopOrder
    checkout(products: [ID]!): Checkout
    getAllListingCategories: [ListingCategory]
    getAllListedProducts: [ListingProduct]
    getListedProductsByCategory(category: ID): [ListingProduct]
    getListedProductsByUser(user: ID!): [ListingProduct]
    getMyListedProducts: [ListingProduct]
    getRequestsIMade: [ListingRequest]
    getRequestsForProductIListed(listingProduct: ID!): [ListingRequest]
    getBMSCategoryIdByName(name:String!): ListingCategory
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): ShopOrder
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): ShopProduct
    login(email: String!, password: String!): Auth
    listAProduct(name: String!, description: String!, image: String!, category: ID!): ListingProduct
    requestAProduct(listingProduct: ID!, duration: String! ): ListingRequest
    editRequestedProduct(listingRequest: ID!, listingProduct: ID!, decision: String!): ListingRequest
  }
`;

module.exports = typeDefs;
