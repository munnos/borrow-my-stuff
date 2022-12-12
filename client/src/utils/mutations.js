import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
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
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
//////Borrow my stuff mutations below/////

export const LIST_AN_ITEM = gql`
  mutation listAProduct(
    $name: String!,
    $description: String!,
      $image: String!,
      $category: ID!)
     {
        listAProduct(
          name: $name,
          description: $description, 
          image: $image,
          category: $category
          ) {
          name
          description
          image
        }
      }
  `;
 export const REQUEST_AN_ITEM = gql`
  mutation RequestAProduct($listingProduct: ID!, $duration: String!) {
    requestAProduct(listingProduct: $listingProduct, duration: $duration) {
      active
      approved
      dateRequested
      duration
    
    }
  }`;

  export const CHANGE_REQUEST_STATUS = gql`
  mutation EditRequestedProduct($listingRequest: ID!, $listingProduct: ID!, $decision: String!) {
    editRequestedProduct(listingRequest: $listingRequest, listingProduct: $listingProduct, decision: $decision) {
      _id
      active
      approved
      dateRequested
      duration
    }
  }  
  `;