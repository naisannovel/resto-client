import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { API } from "../../store/baseURL";


const StripePaymentGateway = ({price}) => {

  const makePayment = token => {
    const body = { token, price };
    const headers = {
      "Content-Type": "application/json"
    };

    return fetch(`${API}/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
          console.log(response);
        // const { status,statusText } = response;
        // if(status === 200 && statusText === "OK"){
        //   getService(id)
        // }
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