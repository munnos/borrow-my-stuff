import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card }from 'react-bootstrap';


function Listed({ requests }) {

    console.log("inside request component");
    console.log(requests);
    
  return (
    
     <Container fluid>
   <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>
            <h3>Item Details</h3>
            </Card.Body>
          </Card>
     <Row className="justify-content-md-center">
        {requests && 
          requests.map((request) =>  (
                      
            <Card className="mt-2">
                <Card.Header>{request.dateRequested}</Card.Header>
                <Card.Body>        
                    <Card.Text>
                            {request.requestee.firstName}
                    </Card.Text>
                </Card.Body>
                <Card.Body>        
                    <Card.Text>
                            {request.description}
                    </Card.Text>
                </Card.Body>            
            </Card>
            ))}
      
      </Row> 
      
      </Container>
  );
}

export default Listed;
