import React from "react";
import { Button } from 'react-bootstrap' 
import Cart from "../components/Cart";
import Carousel from "../components/Carousel";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS } from "../utils/queries"

const Home = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

const topProduct = [];

  return (
    <div className="container">
      <h1>This is the Home page</h1>
      <Button type="Button" class="btn btn-Primary">Primary</Button>
      <Carousel products ={products} />
      <Cart />
    </div>
  );
};

export default Home;