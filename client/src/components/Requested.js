import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_REQUESTED_ITEMS } from "../utils/queries";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//approve: false, active: true -> request is active - pending approval - default
//approve: true, active: false -> request is no longer active - request approved
//approve: false, active: false -> request is no longer active - request denied

function Requested({ profileView }) {
  console.log("inside request component");
  const { loading, data } = useQuery(GET_MY_REQUESTED_ITEMS);
  const requestedProducts = data?.getRequestsIMade || [];
  console.log(data);
  console.log(requestedProducts);

  if (!requestedProducts.length) {
    return <h3>No Requested Products Yet</h3>;
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {requestedProducts &&
            requestedProducts.map((requestedProduct) => {
              if (
                requestedProduct.approved === false &&
                requestedProduct.active === true
              ) {
                return (
                  <>
                    <Col>
                      <Card
                        border="warning"
                        id="reqProdCard"
                        style={{ width: "22rem" }}
                        key={requestedProduct._id}
                      >
                        <Card.Header
                          as="h4"
                          className="text-center fw-bold bg-warning text-black"
                        >
                          {" "}
                          Pending approval...
                        </Card.Header>
                        <Card.Img
                          id="reqProdImg"
                          variant="bottom"
                          src={requestedProduct.listingProduct.image}
                        />
                        <Card.Body className="bg-secondary fw-bold">
                          <Card.Title className="text-center fw-bold">
                            {requestedProduct.listingProduct.name}
                          </Card.Title>
                          {/* <Card.Title>Posted by {requestedProduct.listingProduct.user.FirstName}</Card.Title> */}
                        </Card.Body>
                        <Card.Footer
                          as="h6"
                          className="cardFooter  bg-dark text-white"
                        >
                          Requested on {requestedProduct.dateRequested}
                          <br/> for {requestedProduct.duration}
                        </Card.Footer>
                      </Card>
                    </Col>
                  </>
                );
              } else if (
                requestedProduct.approved === true &&
                requestedProduct.active === false
              ) {
                return (
                  <>
                    <Col>
                      <Card
                        border="success"
                        id="reqProdCard"
                        style={{ width: "22rem" }}
                        key={requestedProduct._id}
                      >
                        <Card.Header
                          as="h5"
                          className="text-center fw-bold bg-success text-white"
                        >
                          {" "}
                          Request approved!{" "}
                        </Card.Header>
                        <Card.Img
                          id="reqProdImg"
                          variant="bottom"
                          src={requestedProduct.listingProduct.image}
                        />
                        <Card.Body className="bg-secondary fw-bold">
                          <Card.Title className="text-center fw-bold">
                            {requestedProduct.listingProduct.name}
                          </Card.Title>
                          {/* <Card.Title>Posted by {requestedProduct.listingProduct.user.FirstName}</Card.Title> */}
                        </Card.Body>
                        <Card.Footer as="h6" className="text-center">
                          Requested on {requestedProduct.dateRequested}
                          <br/> for {requestedProduct.duration}
                        </Card.Footer>
                      </Card>
                    </Col>
                  </>
                );
              } else if (
                requestedProduct.approved === false &&
                requestedProduct.active === false
              ) {
                return (
                  <>
                    <Col>
                      <Card
                        border="danger"
                        id="reqProdCard"
                        style={{ width: "22rem" }}
                        key={requestedProduct._id}
                      >
                        <Card.Header
                          as="h5"
                          className="text-center fw-bold bg-danger text-black"
                        >
                          {" "}
                          Request denied...{" "}
                        </Card.Header>
                        <Card.Img
                          id="reqProdImg"
                          variant="bottom"
                          src={requestedProduct.listingProduct.image}
                        />
                        <Card.Body className="bg-secondary fw-bold">
                          <Card.Title className="text-center fw-bold">
                            {requestedProduct.listingProduct.name}
                          </Card.Title>
                          {/* <Card.Title>Posted by {requestedProduct.listingProduct.user.FirstName}</Card.Title> */}
                        </Card.Body>
                        <Card.Footer as="h6" className="text-center">
                          Requested on {requestedProduct.dateRequested}
                          <br/> for {requestedProduct.duration}
                        </Card.Footer>
                      </Card>
                    </Col>
                  </>
                );
              }
            })}
        </Row>
      </Container>
    </div>
  );
}
export default Requested;
