import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { Button } from 'react-bootstrap' 
import { Link } from 'react-router-dom';


const Donate = () => {
  return (
    <div className="container">
      <h1>Donations page</h1>
      
      <Button type="Button" className="btn btn-Primary">Primary</Button>
      <Link to="/">
      <Button  className="btn btn-Primary"  variant="secondary">Secondary</Button>
      </Link>
      <CategoryMenu />
      <ProductList />
      <Cart />
      
    </div>
  );
};

export default Donate;