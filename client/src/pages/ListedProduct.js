import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { LISTED_PRODUCTS } from '../utils/queries';

const ListedProduct = () => {
    // queries are run here
    // 1. get an id to run a query to get an item ?
    const { _id } = useParams(); // this comes from another component
    console.log(_id);
    const { loading, data } = useQuery(LISTED_PRODUCTS, {
      // pass URL parameter
      variables: {  id: _id },
    });
    // const test = { getListedProductId }
    console.log(data);
    //console.log(test);
    console.log(loading);

    const item = data?.ListedProduct || {};
  
    // 2. use useQuery to run the query to fetch a product by id
    // store the data in a const called 'item'

    console.log()

    

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
    
