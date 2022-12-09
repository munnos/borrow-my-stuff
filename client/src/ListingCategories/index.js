import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./style.css";
import Card from 'react-bootstrap/Card';

const ListingCategories = (props) => {
  let categories = props.categories;
  console.log(props.categories)
  // if (!categories.length) {
  //   return <h3>No Categories Yet</h3>;
  // }
    return (
      <Container> 
        <Card border="dark" style={{ width: "80vw", height: "30vh", marginBottom: "2rem", marginTop: "2rem"}}>
      <Card.Header>[Placeholder item 1]</Card.Header>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        [Pull through item description here]
      </Card.Body>
      </Card>
      <Card border="dark" style={{ width: "80vw", marginBottom: "2rem", height: "30vh"}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Header>[Placeholder item 2]</Card.Header>
      <Card.Body>
        [Pull through item description here]
      </Card.Body>
      </Card>
      <Card border="dark" style={{ width: "80vw", marginBottom: "2rem", height: "30vh"}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Header>[Placeholder item 3]</Card.Header>
      <Card.Body>
        [Pull through item description here]
      </Card.Body>
      </Card>
      <Card border="dark" style={{ width: "80vw", marginBottom: "2rem", height: "30vh"}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Header>[Placeholder item 4]</Card.Header>
      <Card.Body>
        [Pull through item description here]
      </Card.Body>
      </Card>
      <Card border="dark" style={{ width: "80vw", marginBottom: "2rem", height: "30vh"}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Header>[Placeholder item 5]</Card.Header>
      <Card.Body>
        [Pull through item description here]
      </Card.Body>
      </Card>
      <Card border="dark" style={{ width: "80vw", marginBottom: "2rem", height: "30vh"}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Header>[Placeholder item 6]</Card.Header>
      <Card.Body>
        [Pull through item description here]
      </Card.Body>
      </Card>
      </Container>     
    );
  };
  
  export default ListingCategories;
