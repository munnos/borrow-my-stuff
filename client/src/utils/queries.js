import { gql } from '@apollo/client';

/*****Shop queries ****************************/
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;


export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_LISTEDCATEGORIES = gql`
query GetListedProductsByCategory($category: ID) {
  getListedProductsByCategory(category: $category) {
    _id
    category {
      name
      _id
    }
  }
}
`;



export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_BMS_CATEGORY = gql`
  query getBMSCategoryIdByName($name: String) {
          getBMSCategoryIdByName(name: String) {
            _id
            name
          }
  }
`
export const QUERY_All_CATEGORIES = gql`
  query GetAllListingCategories {
  getAllListingCategories {
    name
    image
    _id
  }
}
`;

export const QUERY_ALL_LISTED_PRODUCTS = gql`
 query GetAllListedProducts {
  getAllListedProducts {
    _id
    borrowDuration
    image
    listingDate
    name
  }
}
`;