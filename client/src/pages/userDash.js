

import Cart from "../components/Cart";
import Requested from "../components/Requested"
import Listed from "../components/Listed"
import Liked from "../components/Liked.js"
import { Button } from 'react-bootstrap' 
//import User from "../../../server/models/User";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CategoryCards from "../components/CategoryCards";
import Card from 'react-bootstrap/Card';

//need logged in user id
//user query for name - could be stored in local storage from shop functionality


const UserDash = () => {

  const [profileView, setProfileView] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setProfileView(event.target.value);

    console.log('value is:', event.target.value);
  
    // 👇️ value of input field
    console.log('handleClick 👉️',  event.target.value);
    //testing(event.target.value);
  }
   const testing = (profileView) =>{
    console.log('profileView:', profileView)
      if(profileView === "requested") {
        return   <Requested profileView={profileView}/>
      } 

      if (profileView === "listed"){
        return <Listed profileView={profileView}/>
      } 

      if (profileView === "liked" ){
        return  <Liked profileView={profileView}/>
      } 

        console.log("no matching condition");
      }   

    // switch(profileView) {
    //   case "requested":
    //     console.log(`inside switch statement ${profileView}`);
    //     return <Requested profileView={profileView}/>
    //     case "listed":
    //       return <Listed profileView={profileView}/> 
    //       case "liked":
    //         return <Liked profileView={profileView}/> 
    //         default:
    //           console.log("not match")
    //           return;
      
    

   

  return (
    
    <div className="container">
    <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Title>Welcome to your Dashboard{/*  {user.name}*/}</Card.Title> 
        </Card>
      </Row> 

      <Row className="px-4 my-2">
        <Col sm={3}>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={handleClick} value="requested" size="lg"style={{backgroundColor:'#253F41'}}>
              Requested items
            </Button>
            <Button variant="secondary" onClick={handleClick} value="listed" size="lg" style={{backgroundColor:'#253F41'}}>
              Listed items
            </Button>
            <Button variant="secondary" onClick={handleClick} value ="liked" size="lg" style={{backgroundColor:'#253F41'}}>
              Liked items
            </Button>
           
            <Button variant="secondary" href="/orderHistory"size="lg" style={{backgroundColor:'#253F41'}}>
              View order history 
            </Button>
              
          </div>
        </Col>
        <Col sm={8}>
          {/* components are called here */}

        {profileView && testing(profileView)}


        </Col>




      </Row>
       {testing}
      <Cart />
      
    </div>
  );
};

export default UserDash;