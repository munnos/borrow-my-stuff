import React from "react";
import { Button, Image } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_LISTEDCATEGORIES } from "../utils/queries";
import { Link, useParams } from "react-router-dom";
import ListingCategories from "../components/ListingCategories";
import Container from "react-bootstrap/Container";



const ViewListingsByCategory = () => {
  let { id } = useParams(); 
  const { loading, data } = useQuery(QUERY_LISTEDCATEGORIES, { variables: { category: id}});

  const productsByListedCategory = data || [];
  console.log(data);

  return (
    <main>
    <Container>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ListingCategories
              products={productsByListedCategory}
              // title="Here is the list of products in your chosen category"
            />
          )}
      </Container>
    </main>
  );
};

export default ViewListingsByCategory;
