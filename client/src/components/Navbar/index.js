import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import bms_logo from '../../assets/images/stuff.png'
import './index.css';
//import { Nav } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (               
        <>
          <li className="nav-item fs-3">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="nav-item fs-3">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
       </>
      );
    } else {
      return (       
       <>
          <li className="nav-item fs-3">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li> {''}
          <li className="nav-item fs-3">
            <Link to="/login" className="nav-link">
              Login
            </Link> 
          </li>
        </>
      );
    }
    
  }

  return (
    <>
    <header className="navbar nav custom-header">
    <div className="container-fluid nav">
      <ul className='nav justify-content-end'>
        <Link to="/">
        <img className="navbar-brand m-2" src={bms_logo} alt="logo" class="logo"/>          
          
        </Link>
            <li className="nav-item fs-3">
         <Link to="/donate" className="nav-link">Donate</Link>
  </li>

   {showNavigation()}

      <nav className="navbar">
         
      </nav>
      </ul>
      </div>
    
   </header>

  </>

    
  );
}

export default Nav;
