import React, { useState } from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import "./style.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const ListingCategories = (props) => {
  // console.log(props.products.getListedProductsByCategory.category.name);
  console.log(props);

  if (!props.products.getListedProductsByCategory.length) {
    console.log(props.products.length);

    return <h1> No products listed for this category yet!</h1>;
  } else if (props.products.getListedProductsByCategory.length)
    console.log(props.products.getListedProductsByCategory[0].category.name);
  return (
    <Container fluid>
      <Card className="text-center bg-secondary text-white my-5 py-4">
        <Card.Body>
          <h3>{props.products.getListedProductsByCategory[0].category.name}</h3>
        </Card.Body>
      </Card>
      <Row className="">
        <Col sm={4}>
      {props.products.getListedProductsByCategory &&
        props.products.getListedProductsByCategory.map((product) => (
          <Card className="text center bg-light text-black"
            key={product}
            // border="dark"
            // style={{
            //   width: "80vw",
            //   height: "30vh",
            //   marginBottom: "2rem",
            //   marginTop: "7rem",
          
          >
            <Card.Header >{product.name}</Card.Header>
            {/* <Link></Link>More details </Button> to={`/listedproduct/${product._id}`}></Link> */}
            <Card.Text style={{marginTop: "2rem", marginLeft: "1rem"}}>{product.description}</Card.Text>
            <Link to={`/listedproduct/${product._id}`}>
              <Button style={{marginTop: "2rem", marginBottom: "2rem"}}> View item details</Button>
            </Link>
          </Card>
        ))}
          </Col> 
        </Row>
    </Container>
  )}

export default ListingCategories;
