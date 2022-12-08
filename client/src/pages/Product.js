import React from "react";
import ProductItem from "../components/ProductItem";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap' 
import { Link } from 'react-router-dom';

function Product() {
    
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <ProductItem item={item}/>
              <Button variant="primary">Request Item</Button>
              <Button variant="primary">Request Item</Button>
            </Card.Body>
          </Card>
        );
      }
    export default Product;
    