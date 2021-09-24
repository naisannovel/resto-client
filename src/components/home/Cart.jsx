import React from 'react';
import {  Form, FormGroup, Label, Input } from 'reactstrap';

const Cart = () => {
    return (
        <div className='cart__item__main__container container-fluid'>
            <div className='cart__item__container'>
                <div className="cart__item__details">
                    <h1>Shopping Cart</h1>
                    <hr />
                </div>
            </div>
            <div className="cart__item__price__container">
                <div className="cart__checkout__container">
                    <h1>Checkout</h1>
                    <hr />
                    <Form>
                        <FormGroup className='mt-5'>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" id="name" placeholder="Enter Your Name" />
                        </FormGroup>
                        <FormGroup className='mt-3'>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Your Email" />
                        </FormGroup>
                        <FormGroup className='mt-3'>
                            <Label for="number">Number</Label>
                            <Input type="number" name="number" id="number" placeholder="Enter Your Phone Number" />
                        </FormGroup>
                        <FormGroup className='mt-3'>
                            <Label for="address">Shipping Address</Label>
                            <Input type="textarea" rows="4" name="address" id="address" />
                        </FormGroup>
                    </Form>
                    <div className='cart__total__price'>
                        <span>Items 3</span>
                        <span>$245</span>
                    </div>
                    <div style={{textAlign:'center',marginTop:'15px'}}>
                        <button className='primary__btn'>Pay With Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;