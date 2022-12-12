import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Col, Container, Row, Form, Card} from "react-bootstrap";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        {error ? (
          <div>
          <p className="error-text">The provided credentials are incorrect</p>     
          </div>
        ) : null}
        
        <Button className="mt-3 mb-3"variant="primary" type="submit">Submit </Button> 
       
      </form>
      </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default Login;
