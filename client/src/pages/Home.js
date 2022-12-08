import React from "react";
import { Button, Image } from "react-bootstrap";
import Cart from "../components/Cart";
import Carousel from "../components/Carousel";
import { useQuery } from "@apollo/client";
import { QUERY_All_CATEGORIES } from "../utils/queries";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoryCards from "../components/CategoryCards";
import Card from "react-bootstrap/Card";

const Home = () => {
  const { loading, data } = useQuery(QUERY_All_CATEGORIES);
  const categories = data?.getAllListingCategories || [];
  
  
  return(
  <div>
    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
        <Image src="https://picsum.photos/900/400/" fluid
         rounded />
        </Col>  
        <Col sm={5}> 
          <h1 className="font-weight-light"> Tagline</h1>
          <p>
            Borrow my Stuff is a not-for-profit organisation linking communities of like minded people who ....
          </p>
          <Button className="button" variant="outline-primary" href="/donate" >Support our cause</Button>
        </Col>
      </Row>
       <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>Are you ready to join a community of like-minded people?  Select a category and start your Borrow my Stuff journey today...</Card.Body>
        </Card>
      </Row> 
      <Row>
          <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>
              Are you ready to join a community of like-minded people? Select a
              category and start your Borrow my Stuff journey today...
            </Card.Body>
          </Card>
        </Row>
        <div id="categoryCardSection" className="col-12 col-md-10 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CategoryCards categories={categories} />
          )}
        </div>
        <Carousel />
      </Container>
      <Cart />
    </div>
  );
};

export default Home;
