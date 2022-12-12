import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Button, Col, Container, Row, Form, Card} from "react-bootstrap";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (

<Container fluid>
    <Row className = "mt-4">
    <Col md={{ span: 8, offset: 2 }}>
    <Link to="/signup">← Go to Signup</Link>
    <Card className="text-center bg-secondary text-white my-5 py-4">
           <h3>Login </h3>                
       </Card>
    <Card className='mt-3' border="primary"> 
     
      <form border = "success" onSubmit={handleFormSubmit}>

      <Form.Group className="mt-3">
        <Form.Label htmlFor="firstName">First name:</Form.Label>
            <Form.Control type="text" 
                placeholder="Enter first name"
                name="firstName"           
                id="firstName"
                onChange={handleChange} />       
        </Form.Group>

        <Form.Group className="mt-3">
        <Form.Label htmlFor="lastNname">Last name:</Form.Label>
            <Form.Control type="text" 
                placeholder="Enter last name"
                name="lastName"           
                id="lastName"
                onChange={handleChange} />       
        </Form.Group>

      <Form.Group className="mt-3" controlId="formBasicEmail">
        <Form.Label htmlFor="email">Email address:</Form.Label>
        <Form.Control type="email" 
            placeholder="Enter email"
            name="email"           
            id="email"
            onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="pwd">Password:</Form.Label>
            <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            id="pwd"
            onChange={handleChange} />
      </Form.Group>             
    <Button className="mt-3 mb-3"variant="primary" type="submit">Submit </Button> 
        
      </form>
      </Card>
      </Col>
      </Row>
    </Container>
 );
}

export default Signup;