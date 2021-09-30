import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { API } from "../../store/baseURL";
import _ from 'lodash';
import { saveCartItem } from "../../store/cart";
import { loading } from "../../store/cart";


const StripePaymentGateway = ({price}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => {
        return {
            cart: state.cart.cart
        }
    })

  const makePayment = token => {
    const body = { token, price };
    const headers = {
      "Content-Type": "application/json"
    };
    dispatch(loading(true));
    return fetch(`${API}/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        const { status,statusText } = response;
        if(status === 200 && statusText === "OK"){

        const address = _.pick(token.card,["address_line1","address_city","address_zip","address_country"])
        
        const myCart = [];
        cart?.cart?.map(item => {
            const cartItem = { cartItem: item?._id, quantity: item?.quantity }
            myCart.push(cartItem);
        })
          const data = {address,myCart}
          dispatch(saveCartItem(data));
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='text-center mt-4 mb-3'>
        <StripeCheckout
          stripeKey='pk_test_51IeH6gL6cSctvL5CRe1beBmNAcztwKzQhl1oMTXv8wYOPYkbG4MtD9pEDbBbueHPeMjKlSKqceONsJxIXNsKX5IW00ycWi9yhb'
          token={makePayment}
          name="Resto."
          amount={price * 100}
          allowRememberMe
          shippingAddress
        />
    </div>
  );
}

export default StripePaymentGateway;