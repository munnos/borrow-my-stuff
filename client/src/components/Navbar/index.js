import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import bms_logo from '../../assets/images/stuff.png'
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navtest() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (               
        <>
        <Link className="nav-link" to="/Donate">Donate</Link>
        <Link to="/userDash" className="nav-link">
              View Profile
            </Link> 
            <Link to="/addListItem" className="nav-link">
             List an Item
            </Link>
            <Nav.Link href="#link">Your Listed Items</Nav.Link>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
                       
       </>
      );
    } else {
      return (       
       <>
          
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          
            <Link to="/login" className="nav-link">
              Login
            </Link> 
            
          
        </>
      );
    }
    
  }

  return (
    
    <header className="custom-header">             
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
      <Link to="/donate">
        <img className="navbar-brand" src={bms_logo} alt="logo" class="logo"/>            
        </Link>
       
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
           
            {showNavigation()}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/Your listed Items">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/order-history">Order History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/donate">
                Support Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
  );
}

export default Navtest;
