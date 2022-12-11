import React from "react";
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { LISTED_PRODUCTS } from '../utils/queries';
import OneListedProduct from "../components/OneListedProduct";
import RequestToBorrow from "../components/RequestToBorrow";

const ListedProduct =  () => {
    // queries are run here
    // 1. get an id to run a query to get an item ?
    const { id } = useParams(); // this comes from another component
    console.log(id);
    const { loading, data } = useQuery(LISTED_PRODUCTS, { variables: {  id }, });
    const item = data?.getListedProductById||{};
  console.log("inside request to borrow");
       
  return (
          <Container>
          {loading ? (
            <div>Loading data..</div>
          ) : (
            <OneListedProduct
              item = { item }
              title ="One listed product"
            />      
           )}
            <RequestToBorrow
              product = { id }
              title ="One listed product"
            />
          </Container>
         
        );
      }
    export default  ListedProduct ;
    
