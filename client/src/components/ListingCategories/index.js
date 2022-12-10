import React from "react";
import Button from "react-bootstrap/Button";
import CardHeader from "react-bootstrap/CardHeader";
import Container from "react-bootstrap/Container";
import "./style.css";
import Card from "react-bootstrap/Card";

const ListingCategories = ({ products, title }) => {
  if (!products.length) {
    return <h3>No products yet</h3>;
  }
  return (
    <Container>
      <h1>{title} </h1>
      {products &&
        products.map((product) => {
          <Card key={product._id}
            border="dark"
            style={{
              width: "80vw",
              height: "30vh",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Card.Header>[Placeholder item 1]</Card.Header>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>[Pull through item description here]</Card.Body>
          </Card>;
        })}
    </Container>
  );
};

export default ListingCategories;


