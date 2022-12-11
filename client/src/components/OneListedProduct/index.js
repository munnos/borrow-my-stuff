import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card }from 'react-bootstrap';




const  OneListedProduct = (props) =>{
 console.log(props);
 console.log("inside one listed product");
 return (
    
   <Container fluid>
   <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>
            <h3>Item Details</h3>
            </Card.Body>
          </Card>
     <Row className="">
        <Col sm={4}>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/75" />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                 
                </Card.Text>
        
            </Card.Body>
        </Card>
        </Col>  
        <Col sm={8}>                
            <Card className="mt-2">
                <Card.Header>Description</Card.Header>
                <Card.Body>        
                    <Card.Text>
                            {props.item.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-2">
                <Card.Header>Date listed </Card.Header>
                <Card.Body>        
                    <Card.Text>
                            Item listed by {props.item.user.firstName} on {props.item.listingDate}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-2 mb-3">
                <Card.Header>Listed in category </Card.Header>
                <Card.Body>        
                    <Card.Text>
                            {props.item.category.name}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
      </Row> 
      
      </Container>
  );
}

export default OneListedProduct;