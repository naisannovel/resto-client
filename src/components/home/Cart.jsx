import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from './Navbar';
import { deleteCartItem, increaseItemQuantity, decreaseItemQuantity } from '../../store/cart';

const Cart = () => {

  const cart = useSelector(state =>{
    return {
      cart: state.cart.cart
    }
  })
  const dispatch = useDispatch();

  let totalCheckoutPrice = 0;
  cart?.cart?.map(item =>(
    totalCheckoutPrice += item.price * item.quantity
  ))
  

  const cartItem = cart?.cart?.map(item => (
    <div className="cart__item mb-5">
      <div className="d-flex align-items-center" style={{ width: "50%" }}>
        <img src={ `data:image/png;base64,${item.image}` } alt="CartItem" />
        <div style={{ marginLeft: "20px" }}>
          <h5>{ item.name }</h5>
          <h4>${ item.price }</h4>
          <h5 onClick={()=>dispatch(deleteCartItem(item._id))} style={{ color: "red",cursor:'pointer' }}>remove</h5>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "25%" }}
      >
        <span onClick={()=> dispatch(decreaseItemQuantity(item._id))} style={{ fontSize: "25px", cursor: "pointer" }}>-</span>
        <span
          className="d-flex justify-content-center align-items-center mx-2"
          style={{
            width: "40px",
            height: "30px",
            border: "1px solid #F0EEF0",
            background: "white",
            fontSize: "14px",
          }}
        >
          { item.quantity }
        </span>
        <span onClick={()=> dispatch(increaseItemQuantity(item._id))} style={{ fontSize: "25px", cursor: "pointer" }}>+</span>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "25%" }}
      >
        <h5>${ (item.price * item.quantity).toFixed(2) }</h5>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar/>
    <div className="cart__item__main__container container-fluid">
      <div className="cart__item__container">
        <div className="cart__item__details">
          <h1>Shopping Cart</h1>
          <hr />
          <div className="cart__item__table__header">
            <div style={{ width: "50%" }}>Product Details</div>
            <div style={{ width: "25%", textAlign: "center" }}>Quantity</div>
            <div style={{ width: "25%", textAlign: "center" }}>Total Price</div>
          </div>
          {cartItem}
        </div>
      </div>
      <div className="cart__item__checkout__container">
        <div className="cart__checkout__container">
          <h1>Checkout</h1>
          <hr />
          <Form>
            <FormGroup className="mt-5">
              <Label for="name">Name</Label>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Label for="number">Number</Label>
              <Input
                type="number"
                name="number"
                id="number"
                placeholder="Enter Your Phone Number"
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Label for="address">Shipping Address</Label>
              <Input type="textarea" rows="4" name="address" id="address" />
            </FormGroup>
          </Form>
          <div className="cart__total__price">
            <span>Total Price</span>
            <span>$ { totalCheckoutPrice.toFixed(2) }</span>
          </div>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <button className="primary__btn">Pay With Card</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
