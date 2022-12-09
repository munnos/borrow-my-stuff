import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Auth from '../../utils/auth';
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_All_CATEGORIES } from  '../../utils/queries'; 
import { LIST_AN_ITEM } from  '../../utils/mutations'; 




const ListItemForm = () => {
    const [form, setForm] = useState("");
    const [errors, setErrors] = useState({});    

    const { loading, data } = useQuery(QUERY_All_CATEGORIES);
    const categories = data?.getAllListingCategories || [];
    
    console.log(categories);


    const [ listAProduct, { error } ] = useMutation(LIST_AN_ITEM)
   
    

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null

        })   
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form);

        const token = Auth.loggedIn() ? Auth.getToken() : null;
            
        if(form !=={}  && token)
        {
            console.log("Items in the form")        
            console.log("user logged in")        
            console.log(form);
            //find category id

            const name = form.name;
            const category = form._id;
            const image = form.image;
            const description = form.description
            console.log(name, category, image, description);

            try {
                const { data } = await listAProduct({
                  variables: {
                    name,
                    description,
                    image,
                    category,                    
                  },
                });
          
               } catch (err) {
                console.error(err);

               }
                    

        }
        //console.log(token);
        if (!token) {
        return false;}
    }
        
    
    
    return (       
       
        <div>
        <h1>List an Item</h1>
            <Container className="fluid"> 
            <Form>
                
                <Form.Group>
                <Form.Label>Enter a title for your listing:</Form.Label>
                <Form.Control name="title" type="text" 
                            placeholder="Enter title "
                            value= {form.name}
                            onChange={e=>setField('name', e.target.value)}
                            
                             />
                </Form.Group>
                
                <Form.Group>
                <Form.Label>Enter a description:</Form.Label>
                <Form.Control name="description" as="textarea" 
                            placeholder="Add description "
                            value={form.description}
                            onChange={e=>setField('description', e.target.value)} />   
                            
                </Form.Group>

                <Form.Group >
                <Form.Label>Enter image link:</Form.Label>
                <Form.Control name="image" type="text" 
                            placeholder="Enter your image link "
                            value={form.image}                          
                            onChange={e=>setField('image', e.target.value)}  />
                </Form.Group>

                
                <Form.Group controlId>
                    <Form.Label>Select a category for your listing</Form.Label>
                    <Form.Select 
                        value={form.category}                    
                         placeholder="Select category"
                         onChange={e => {setField('_id', e.target.value)}}>
                        <option>Select Category</option>
                        {categories.map((option, index) => (
                        <option key={index} value={option._id}>{option.name}</option>))}                    
                        
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId>
                    <Form.Label>Select a listing duration:</Form.Label>
                    <Form.Select 
                        value={form.duration}                    
                         placeholder="Listing Duration"
                         onChange={e=> {setField('duration', e.target.value)}}>
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
                <Button variant="primary" className="mt-3" onClick={handleSubmit} type="submit">
                Click to list your Item
                </Button>
                </Form.Group>
            </Form>
            <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>
          <p>Please upload an image to an image hosting website and paste the link in the form above - we'll link it to your listed item.  </p>
          <Button ClassName="mb-3" className="button" variant="outline-primary" href="https://imgbb.com/" target="_blank" >Free image hosting site</Button>
          </Card.Body>
        </Card>
      </Row> 

        </Container>


        </div>

        
      
    )
      
  };
  
  export default ListItemForm;


// {[{_id: 1, name: 'test'}].map(e => <option value={e._id}>{e.name}</option>)}