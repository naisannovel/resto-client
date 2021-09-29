import React from "react";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
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
    <div className='col-md-4'>
      <Card className='dishes__card__container'>
        {/* <div className="navbar-icon-hover dishes__card__eye__icon">
          <FontAwesomeIcon icon={faEye} />
        </div> */}
        <CardImg
          top
          width="100%"
          src={ `data:image/png;base64,${image}` }
          alt="dish"
        />
        <CardBody>
        {/* <div className="dishes__card__review__container">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div> */}
          <CardTitle tag="h5"> { name } </CardTitle>
          <CardText className='dishes__card__paragraph'> { about } </CardText>
          <div className="dishes__card__price__container">
            {
              inCart ?
              <button className="primary__btn" style={{background:'green'}}>Added</button>:
              <button onClick={()=>dispatch(addToCart({_id,name,image,about,price,quantity:1}))} className="primary__btn">Add To Cart</button>
            }
            <h5>$ { price } </h5>
          </div>
        </CardBody>
      </Card> 
    </div>
  );
};

export default DishesCard;
