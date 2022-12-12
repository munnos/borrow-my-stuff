import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Aboutus = () => {
  return (
    <div className="container">
      <Row className="px-4 my-2">
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Title>About Us{/*  {user.name}*/}</Card.Title>
          <Card.Body className="wrap">We are a group that wishes to help people in these hard times and to do that 
          we have created this app so that people in your local area can share tools, equipment and expertise. <br></br>
          In the spirit of cooperation this website is based upon an honour system, by which the persons that list and
          those that borrow are bound by their mutual trust that the parties involved will not abuse the good will of all.<br></br>
          The all users using this platform acknowledge that they do so at their own risk and the developers are not responsible 
          for any users abuse of this platform or breach the affected parties trust.</Card.Body>
        </Card>
      </Row>     
    </div>
  );
};
export default Aboutus;
