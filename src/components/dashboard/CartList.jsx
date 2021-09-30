import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCartItem } from "../../store/cart";

const OrderList = () => {

  const dispatch = useDispatch();
  const cartList = useSelector(state =>{
    return {
      cart: state?.cart?.allCartItem
    }})
  useEffect(()=>dispatch(getCartItem()),[])
  console.log(cartList.cart);

  let orderListItem = cartList?.cart?.map(item =>(
  <div className="row border">
    <div className="col-md-6">
        <h3> Name: { item.user.name } </h3>
        <h3>Email: { item.user.email } </h3>
        <h4>Address</h4>
        <h5> { item.address.address_line1 } </h5>
        <h5> { item.address.address_city } </h5>
        <h5> { item.address.address_country } </h5>
        <h5> { item.address.address_zip } </h5>
    </div>
    <div className="col-md-6">
      <ul class="list-group list-group-flush">
          {
            item?.myCart?.map(cartItem =>(
                <div>
                  <li class="list-group-item"> { cartItem.quantity } </li>
                  <li class="list-group-item"> { cartItem.cartItem.name } </li>
                  <li class="list-group-item"> { cartItem.cartItem.price } </li>
                </div>
                ))
              }
        </ul>
    </div>
  </div>
));

  return (
    <div className="order__list__container">
      <h1>Order List</h1>
      <hr />
      { orderListItem }
    </div>
  );
};

export default OrderList;