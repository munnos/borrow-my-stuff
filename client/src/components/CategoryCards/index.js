import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.css"

import React from "react";


const CategoryCards = (props) => {
  let categories = props.categories;
  if (!categories.length) {
    return <h3>No Categories Yet</h3>;
  }
    return (
      <Container fluid>
      <Row className="justify-content-md-center">
        {categories && 
          categories.map((category) => (
        <Col>
        <a id="categoryLink" href ="">
        <Card id="categoryCard" style={{ width: '13rem'}} key={category._id}>
          <Card.Img id="categoryImg" variant="top" src={category.image} />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
      </Card>
      </a>
      </Col>
      ))}
      </Row>
      </Container>
    );
  };
  
  export default CategoryCards;