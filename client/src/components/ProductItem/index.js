import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Button, Card, Container, Row, Col } from 'react-bootstrap' 

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <Container fluid>    
      <Card style={{ width: '13rem'}}>
      <Link to={`/products/${_id}`}>
        <Card.Img
        variant="top"
          alt={name}
          src={`/images/${image}`}
        />
        
        <p>Item name: {name}</p>
      </Link>
      
      <div>
        {/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}
        <span>Cost: £{price}</span>
      </div>
      <Button variant="outline-success" onClick={addToCart}>Add to cart</Button>
     
      </Card>      
    </Container>
  );
}

export default ProductItem;


{/* <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        {/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}
    //     <span>£{price}</span>
    //   </div>
    //   <button onClick={addToCart}>Add to cart</button>
    // </div> */}