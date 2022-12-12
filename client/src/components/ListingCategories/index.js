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
      {props.products.getListedProductsByCategory &&
        props.products.getListedProductsByCategory.map((product) => (
          <Card className="listed-product bg-light text-black text-center"
          style={{ width: '45rem' }}
            key={product}
            // border="dark"
            // style={{
            //   width: "80vw",
            //   height: "30vh",
            //   marginBottom: "2rem",
            //   marginTop: "7rem",
          
          >
            <Card.Header as="h3" className="bg-dark text-success fw-bold">{product.name}</Card.Header>
            {/* <Link></Link>More details </Button> to={`/listedproduct/${product._id}`}></Link> */}
            <Card.Text as="h5" className="productDesc">Description: {product.description}</Card.Text>
            <Link to={`/listedproduct/${product._id}`}>
              <Button style={{marginTop: "8px", marginBottom: "10px"}}> View item details</Button>
            </Link>
            <Card.Footer as="h6" className="card-footer text-center fw-bold available-duration">
            Available to borrow for {product.borrowDuration}
                        </Card.Footer>
          </Card>
        ))} 
        </Row>
    </Container>
  )}

export default ListingCategories;
