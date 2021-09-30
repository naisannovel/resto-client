import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCartItem } from "../../store/cart";
import SpinnerSecondary from '../utilities/SpinnerSecondary';

const OrderList = () => {
  document.title = 'Resto. - Cart List'

  const dispatch = useDispatch();
  const cartList = useSelector(state =>{
    return {
      cart: state?.cart?.allCartItem,
      loading: state.cart.loading
    }})
  useEffect(()=>dispatch(getCartItem()),[])

  let orderListItem = cartList?.cart?.map(item =>(
  <div className="row border p-4">
    <div className="col-md-6 d-flex align-items-center justify-content-evenly">
        <div>
          <h3>  { item.user.name } </h3>
          <h3>  { item.user.email } </h3>
        </div>
        <div>
          <h5> Village: { item.address.address_line1 } </h5>
          <h5> City: { item.address.address_city } </h5>
          <h5> Country: { item.address.address_country } </h5>
          <h5> Zip: { item.address.address_zip } </h5>
        </div>
    </div>
    <div className="col-md-6">
      <ul class="list-group list-group-flush d-flex align-items-center justify-content-start">
          {
            item?.myCart?.map(cartItem =>(
                <div>
                  <li class="list-group-item"> <h4> Dish: { cartItem.cartItem.name } <br /> Quantity: { cartItem.quantity } </h4> </li>
                </div>
                ))
              }
        </ul>
    </div>
  </div>
));

  let cartListPage = null;
  if(!cartList.loading){
    cartListPage =
      <div>
        <h1>Order List</h1>
        <hr />
        { orderListItem }
      </div>
  }else{
    cartListPage = <SpinnerSecondary/>
  }

  return (
    <div className="order__list__container">
      { cartListPage }
    </div>
  );
};

export default OrderList;