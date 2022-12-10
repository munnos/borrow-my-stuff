import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CardHeader from "react-bootstrap/CardHeader";
import Container from "react-bootstrap/Container";
import "./style.css";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { REQUEST_AN_ITEM } from "../../utils/mutations";

const ListingCategories = (props) => {
  console.log(props.products.getListedProductsByCategory);
  console.log(props);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const [requestAProduct, { error }] = useMutation(REQUEST_AN_ITEM);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (form !== {} && token) {
      console.log("Items in the form");
      console.log("user logged in");
      console.log(form);
      //find category id

      const duration = form.duration;

      console.log(duration);
      // console.log(id);
      // console.log(listingProduct);

      try {
        const { data } = await requestAProduct({
          variables: {
            // listingProduct,
            duration,
          },
        });
      } catch (err) {
        console.error(err);
      }
      //reset form fields
      setForm({ duration: "" });
    }
    //console.log(token);
    if (!token) {
      return false;
    }
  };
  // if (!products.length) {
  //   return <h3>No products yet</h3>;

  // }
  // console.log(products);
  return (
    <Container>
      <h1>{props.title} </h1>
      {props.products.getListedProductsByCategory &&
        props.products.getListedProductsByCategory.map((product) => (
          <Card
            key={product}
            border="dark"
            style={{
              width: "80vw",
              height: "30vh",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Card.Header>{product.name}</Card.Header>
            <Form>
              <Form.Group controlId>
                <Form.Label>Select a listing duration:</Form.Label>
                <Form.Select
                  value={form.duration}
                  placeholder="Listing Duration"
                  onChange={(e) => {
                    setField("duration", e.target.value);
                  }}
                >
                  <option>Select duration </option>
                  <option value="1 week">1 week </option>
                  <option value="2 week">2 week </option>
                  <option value="3 week">3 week </option>
                  <option value="1 Month">1 Month </option>
                  <option value="2 Month">2 Month </option>
                  <option value="3 Month">3 Month </option>
                  <option value="4 Month">4 Month </option>
                  <option value="5 Month">5 Month </option>
                  <option value="Indefinitely">Indefinitely </option>
                  <option value="Contact Me">Contact Me </option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Request to Borrow
                </Button>
              </Form.Group>
            </Form>
          </Card>
        ))}
      ;{/* <Form> */}
      {/* <Form.Group>
         <Button variant="primary" className="mt-3" type="submit">
                        Request to Borrow
                        </Button>
                    </Form.Group>
                </Form>     */}
    </Container>
  );
};

export default ListingCategories;
