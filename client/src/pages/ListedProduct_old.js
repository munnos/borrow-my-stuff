import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { LISTED_PRODUCTS } from '../utils/queries';

const ListedProduct = async () => {
    // queries are run here
    // 1. get an id to run a query to get an item ?
    const { id } = useParams(); // this comes from another component
    console.log(id);
    const { loading, data } = await useQuery(LISTED_PRODUCTS, {
      // pass URL parameter
      variables: {  id },
    });
    console.log(loading);
    console.log(data);
    console.log(data.getListedProductById.description);
    // const test = { getListedProductId }
    console.log(data);
    //console.log(test);
    

    const item = data?.ListedProduct || {};
  
    // 2. use useQuery to run the query to fetch a product by id
    // store the data in a const called 'item'

    //console.log(data.getListedProductById.description);

    

  if (loading) {
    return <div>Loading...</div>;
  }

        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                S{item.description}
              </Card.Text>
              <Button variant="primary">Request Item</Button>
            
            </Card.Body>
          </Card>
        );
      }
    export default  ListedProduct ;
    
