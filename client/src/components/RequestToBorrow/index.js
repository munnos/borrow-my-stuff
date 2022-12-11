import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Auth from '../../utils/auth';
import { useMutation } from "@apollo/client";
import { REQUEST_AN_ITEM } from  '../../utils/mutations'; 


//item id needs to be passed as  a prop currently hard coded for testing
// user-id from backend - context
// item id passed as a prop
// card with drop down menu to select borrow duration and button to submit request
//graphgl call to create new request

//const listItemId = "6390bb527ad86c7a267b10bd"

const RequestToBorrow = (props) => {
    const listingProduct = props.product; //"639475d16b0dbc4a7fb4face" 
    const [form, setForm] = useState({});
    
    //console.log(props.product);

    const [ requestAProduct, { error } ] = useMutation(REQUEST_AN_ITEM)   
    

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
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

            const duration = form.duration;
            
            console.log(duration)
            console.log(listingProduct);

            try {
                const { data } = await requestAProduct({
                  variables: {
                    listingProduct,
                    duration,
                                      
                  },
                });
                
          
               } catch (err) {
                console.error(err);

               }
               //reset form fields
               setForm({duration: ''});

        }
        //console.log(token);
        if (!token) {
        return false;}
    }
    
    return (
      
        <div>
            
            <Card className="text-center bg-secondary text-white my-5 py-4">           
            <h6>Do you want to borrow this item</h6>            
            </Card>       
     
                <Container className="fluid"> 
                
                <Form>                     
                    
                    <Form.Group controlId>
                        <Form.Label>Select the length of time you would like to borrow this item for:</Form.Label>
                        <Form.Select 
                            value={form.duration}                    
                            placeholder="Listing Duration"
                            onChange={e=> {setField('duration', e.target.value)}}>
                            <option >Select duration </option>
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
                        Request to Borrow
                        </Button>
                    </Form.Group>
                </Form>                
                </Container>
        </div>
    );
  };
  
  export default RequestToBorrow;