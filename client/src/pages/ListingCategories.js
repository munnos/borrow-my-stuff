import React from "react";
import { Button, Image } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_LISTEDCATEGORIES } from "../utils/queries";
import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import Container from "react-bootstrap/Container";


const ViewListingsByCategory = () => {
  let { id } = useParams(); 
  const { loading, data } = useQuery(QUERY_LISTEDCATEGORIES, { variables: { _id: id}});

  const productsByListedCategory = data?.category || [];

  return (
    <main>
    <Container>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList
              products={productsByListedCategory}
              title="Here is the list of products in your chosen category"
            />
          )}
      </Container>
    </main>
  );
};

export default ViewListingsByCategory;
