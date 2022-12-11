import React from "react";
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_ITEM_REQUESTS } from '../utils/queries';
import ItemRequestList from "../components/ItemRequestList";

const ItemRequests =  () => {
    
    //const { id } = useParams(); 
    const listingProduct = '6395e53f0adbc689bdc7f4a3';
    console.log(listingProduct);
    const { loading, data } = useQuery(GET_ITEM_REQUESTS, { variables: {  listingProduct }, });
    console.log(data);
    const item = data?.getListedProductById||{};
  console.log("inside Item requests page");
  console.log(data);
       
  return (
          <Container>
          <h1>Item requests</h1>
         
          { loading ? (
            <div>Loading data..</div>
          ) : (                
           
            <ItemRequestList
              product = { data }
              title ="One listed product"
            /> )}
          </Container>
          
        );
      }
    export default  ItemRequests ;
    