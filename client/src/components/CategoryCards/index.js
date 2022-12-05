import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";


const CategoryCards = () => {
    
    return (
      
      

      <Row>
        <Col>
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src="https://picsum.photos/320/200/" />
          <Card.Body>
            <Card.Title>Garden Tools</Card.Title>
            
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
      </Col>
      </Row>

    
    )
  };
  
  export default CategoryCards;