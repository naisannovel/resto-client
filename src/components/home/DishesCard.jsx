import React from "react";
import { faCheck,  faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart } from "../../store/cart";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

  const DishesCard = ({ _id,image,name,about,price }) => {
  const cart = useSelector(state =>{
    return {
      cart: state.cart.cart
    }
  })
  const dispatch = useDispatch();

  const inCart = cart?.cart?.find(item => item._id === _id);

  return (
    <div>
      <Card className='dishes__card__container'>
        <CardImg
          top
          width="100%"
          src={ `data:image/png;base64,${image}` }
          alt="dish"
        />
        <CardBody>
          <CardTitle tag="h5" style={{textAlign:'left'}}> { name } </CardTitle>
          <CardText className='dishes__card__paragraph' style={{textAlign:'left'}}> { about } </CardText>
          <div className="dishes__card__price__container">
            {
              inCart ?
              <button className="primary__btn" style={{background:'green'}}>
                <FontAwesomeIcon icon={faCheck} />{' '}
                Added</button>:
              <button onClick={()=>dispatch(addToCart({_id,name,image,about,price,quantity:1}))} className="primary__btn">
                <FontAwesomeIcon icon={faShoppingCart} />{' '}
                Add To Cart</button>
            }
            <h5>$ { price } </h5>
          </div>
        </CardBody>
      </Card> 
    </div>
  );
};

export default DishesCard;
