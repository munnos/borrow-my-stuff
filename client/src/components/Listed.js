import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MY_LISTED_PRODUCTS } from "../utils/queries";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Listed({ profileView }) {
  const { loading, data } = useQuery(GET_MY_LISTED_PRODUCTS);
  const listedProducts = data?.getMyListedProducts || [];

  if (!listedProducts.length) {
    return <h3>No Listed Products Yet</h3>;
  }
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {listedProducts &&
            listedProducts.map((listedProduct) => (
              <Col>
                <Card
                  className="listedItemsCard"
                  border="success"
                  style={{ width: "22rem" }}
                  key={listedProduct._id}
                >
                  <Card.Header as="h5" className="text-center fw-bold">
                    {listedProduct.name}
                  </Card.Header>
                  <Card.Img variant="bottom" src={listedProduct.image} />
                  <Card.Body className="text-center bg-light">
                    <Card.Title className="text-center">
                      Listed on
                      <br /> {listedProduct.listingDate}
                    </Card.Title>
                    <Link to={`/itemRequests/${listedProduct._id}`}>
                      <Button variant="primary">View Requests</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
export default Listed;
