import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card }from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { CHANGE_REQUEST_STATUS } from  '../../utils/mutations'; 

function Listed({ requests}) {

    const [ editRequestedProduct, { error } ] = useMutation(CHANGE_REQUEST_STATUS)

    const handleApprove = async (event, listingRequest, listingProduct) => {
      event.preventDefault();
      
      try {
        const { data } = await editRequestedProduct({
          variables: {
            listingRequest,
            listingProduct,
            decision:'approved',
                               
          },
        });
        console.log(data);
                 
       } catch (err) {
        console.error(err);
       
       }     

    }

    const handleReject = async (event, listingRequest, listingProduct) => {
      event.preventDefault();
      console.log(event.target.value);
      
      event.preventDefault();
      //const decision = "approve";
      console.log(event.target.value);
      console.log(listingRequest);
      console.log(listingProduct);      
       

      try {
        const { data } = await editRequestedProduct({
          variables: {
            listingRequest,
            listingProduct,
            decision:'declined',
                               
          },
        });
         console.log(data);
  
       } catch (err) {
        console.error(err);
       
       }

    }
    
  return (
    <div>
     <Container fluid>      
        <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                <h3>Requests Received </h3>
                <h4>{requests[0].listingProduct.name}</h4>
              </Card.Body>
            </Card>
          <Row className="justify-content-md-center">
        {requests && 
          requests.map((request) =>  {
            if (
              request.approved === false &&
                request.active === true

            ) {
              return (
                <>
                <Card border="warning" className="mt-2" key={request._id}>
                <Card.Header>Requested by: {request.requestee.firstName}</Card.Header>
                <Card.Header>Date requested: {request.dateRequested}</Card.Header>
                <Card.Header>Date requested: {request.requestee.email}</Card.Header>            
                <Card.Header>Approval Status: {'Pending'}</Card.Header>               
                <Card.Body>        
                <Button variant="outline-success" value={ 'approved'}  onClick={event => handleApprove(event, request._id, request.listingProduct._id)} type="submit">Approve</Button>{' '}
               <Button variant="outline-danger" value={'declined'}   onClick={event => handleReject(event, request._id, request.listingProduct._id)} type="submit">Reject</Button>
                </Card.Body>                         
                </Card>
                </>
              );
            } else if (

              request.approved === true &&
                request.active === false
            )  {
              return (
              <>
              <Card border="success" className="mt-2" key={request._id}>
                <Card.Header>Requested by: {request.requestee.firstName}</Card.Header>
                <Card.Header>Date requested: {request.dateRequested}</Card.Header>
                <Card.Header>Date requested: {request.requestee.email}</Card.Header>            
                <Card.Header>Approval Status: {'Approved'}</Card.Header>               
                <Card.Body>        
                <Button variant="outline-success" value={ 'approved'}  onClick={event => handleApprove(event, request._id, request.listingProduct._id)} type="submit">Approve</Button>{' '}
               <Button variant="outline-danger" value={'declined'}   onClick={event => handleReject(event, request._id, request.listingProduct._id)} type="submit">Reject</Button>
                </Card.Body>                         
                </Card>
              </>
            );
            } else if (
              request.approved === false &&
              request.active === false    
          ) { 
            return (
              <>
              <Card border="danger" className="mt-2" key={request._id}>
                <Card.Header>Requested by: {request.requestee.firstName}</Card.Header>
                <Card.Header>Date requested: {request.dateRequested}</Card.Header>
                <Card.Header>Date requested: {request.requestee.email}</Card.Header>            
                <Card.Header>Approval Status: {'Declined'}</Card.Header>               
                <Card.Body>        
                <Button variant="outline-success" value={ 'approved'}  onClick={event => handleApprove(event, request._id, request.listingProduct._id)} type="submit">Approve</Button>{' '}
               <Button variant="outline-danger" value={'declined'}   onClick={event => handleReject(event, request._id, request.listingProduct._id)} type="submit">Reject</Button>
                </Card.Body>                         
                </Card>
              </>
            );
          }            
        })}
       
      </Row>      
      </Container>
      </div>
  );
}

export default Listed;
