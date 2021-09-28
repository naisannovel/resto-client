import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const DishesCard = ({ image,name,about,price }) => {

  return (
    <div className='col-4'>
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
            <button className="primary__btn">Add To Cart</button>
            <h5>$ { price } </h5>
          </div>
        </CardBody>
      </Card> 
    </div>
  );
};

export default DishesCard;
