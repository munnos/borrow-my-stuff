import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container, Image } from "react-bootstrap";

const Aboutus = () => {
  return (
    <div className="container">
      <Container>
        <Row className="px-4 my-2">
          <Card className="text-center bg-secondary text-white my-2 py-4">
            <Card.Title>About Us{/*  {user.name}*/}</Card.Title>
            <Row>
              <Col md="2">
                <Image
                  className=""
                  style={{ width: 100, height: 100 }}
                  src="./images/homeimage.png"
                  fluid
                  rounded
                />
              </Col>
              <Col md="10">
                <Card.Body>
                  We are a group that wishes to help people in these hard times
                  and to do that we have created this app so that people in your
                  local area can share tools, equipment and expertise.To help those 
                  who cannot afford to buy or rent tools and equipment in any other way.
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Row>

        <Row className="px-4 my-2">
          <Card className="text-center bg-secondary text-white my-2 py-4">
            <Card.Title>Cooperation{/*  {user.name}*/}</Card.Title>
            <Row>
              <Col md="10">
                <Card.Body>
                  In the spirit of cooperation this website is based upon an
                  honour system, by which the persons that list and those that
                  borrow are bound by their mutual trust that the parties
                  involved will not abuse the good will of all. Breach of this
                  trust will result in the banning and closing of the offending 
                  parties account. Depending on the nature of the trust breach 
                  offending parties can be prosecuted.
                </Card.Body>
              </Col>
              <Col md="2">
                <Image
                  className=""
                  style={{ width: 100, height: 100 }}
                  src="./images/greeting.webp"
                  fluid
                  rounded
                />
              </Col>
            </Row>
          </Card>
        </Row>
        <Row className="px-4 my-2">
          <Card className="text-center bg-secondary text-white my-2 py-4">
            <Card.Title>Disclaimer{/*  {user.name}*/}</Card.Title>
            <Row>
              <Col md="2">
              <Image
                  className=""
                  style={{ width: 100, height: 100 }}
                  src="./images/bodyguard.webp"
                  fluid
                  rounded
                />
              </Col>
              <Col md="10">
            <Card.Body>
              The all users using this platform acknowledge that they do so at
              their own risk and the developers are not responsible for any
              users abuse of this platform or breach the affected parties trust.              
            </Card.Body>
            </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </div>
  );
};
export default Aboutus;
