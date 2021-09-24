import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Cart = () => {
  const cartItem = (
    <div className="cart__item mb-5">
      <div className="d-flex align-items-center" style={{ width: "50%" }}>
        <img src="assets/images/dish-7.jpg" alt="CartItem" />
        <div style={{ marginLeft: "20px" }}>
          <h5>Tasty Food</h5>
          <h4>$24</h4>
          <h5 style={{ color: "red" }}>remove</h5>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "25%" }}
      >
        <span style={{ fontSize: "25px", cursor: "pointer" }}>-</span>
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
          2
        </span>
        <span style={{ fontSize: "25px", cursor: "pointer" }}>+</span>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "25%" }}
      >
        <h5>$254.99</h5>
      </div>
    </div>
  );

  return (
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
          {cartItem}
          {cartItem}
          {cartItem}
          {cartItem}
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
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
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
            <span>Items 3</span>
            <span>$245</span>
          </div>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <button className="primary__btn">Pay With Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
