import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
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
       
        <Card id="categoryCard" style={{ width: '13rem'}} key={category._id}>
        
          <Card.Img id="categoryImg" variant="top" src={category.image} />
          <Card.Body>
          {/* <Link className="btn"to={`/listingCategories/${category._id}`}> */}
            {/* <Card.Title></Card.Title> */}
            {/* <Button variant="primary">Go somewhere</Button> */}
            <Link to={`/categories/${category._id}`}>
            <Button className="button" variant="outline-success"  >{category.name}</Button>
            </Link>
          </Card.Body>
      </Card>
     
      </Col>
      ))}
      </Row>
      </Container>
    );
  };
  
  export default CategoryCards;