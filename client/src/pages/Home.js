import React from "react";
import { Button } from 'react-bootstrap' 
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <h1>This is the Home page</h1>
      <Button type="Button" class="btn btn-Primary">Primary</Button>
  
      <Cart />
    </div>
  );
};

export default Home;