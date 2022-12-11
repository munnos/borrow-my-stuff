import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card }from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { CHANGE_REQUEST_STATUS } from  '../../utils/mutations'; 

function Listed({ requests}) {

    console.log("inside request component");
    console.log(requests);
    console.log(requests)
    const [ EditRequestedProduct, { error } ] = useMutation(CHANGE_REQUEST_STATUS)

    const handleApprove = async (e) => {
      e.preventDefault();
      console.log(e.target.value);

      

      // try {
      //   const { data } = await EditRequestedProduct({
      //     variables: {
      //       listingRequest,
      //       listingProduct,
      //       decision,
                               
      //     },
      //   });
        
  
      //  } catch (err) {
      //   console.error(err);

      //  }

      

    }

    const handleReject = async (e) => {
      e.preventDefault();
      console.log(e.target.value);
      



    }
    
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
                      
            <Card className="mt-2" key={request._id}>
                <Card.Header>Requested by: {request.requestee.firstName}</Card.Header>
                <Card.Header>Date requested: {request.dateRequested}</Card.Header>
                <Card.Header>Date requested: {request.requestee.email}</Card.Header>
                <Card.Header>Approval Status: {}</Card.Header>               
                <Card.Body>        
                <Button variant="outline-success" value="approve" onClick={handleApprove} type="submit">Approve</Button>{' '}
                {/* <Button variant="outline-danger"value="reject"   onClick={event => handleReject(event, key)} key={request._id} type="submit">Reject</Button> */}
                </Card.Body>
                         
            </Card>
            ))}
      
      </Row> 
      
      </Container>
  );
}

export default Listed;
