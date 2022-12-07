import React from "react";
import { Button, Image } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import Container from "react-bootstrap/Container";


const ViewListingsByCategory = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const productsByCategory = data?.products || [];

  return (
    <main>
    <Container>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList
              products={productsByCategory}
              title="Here is the list of products in your chosen category"
            />
          )}
      </Container>
    </main>
  );
};

export default ViewListingsByCategory;
