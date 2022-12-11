import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_LISTED_ITEMS } from "../utils/queries";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Listed( { profileView }) {
    console.log("inside request component");
    const { loading, data } = useQuery(GET_MY_LISTED_ITEMS);
    const listedProducts = data?.getListedProductsByUser || [];
    console.log(data)


    
  return (
    <h1>From the listed component { profileView }</h1>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    );
}

export default Listed;
