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

const DishesCard = () => {
  return (
    <div>
      <Card className='dishes__card__container'>
        <div className="navbar-icon-hover dishes__card__eye__icon">
          <FontAwesomeIcon icon={faEye} />
        </div>
        <CardImg
          top
          width="100%"
          src="/assets/images/dish-7.jpg"
          alt="Card image cap"
        />
        <CardBody>
        <div className="dishes__card__review__container">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText className='dishes__card__paragraph'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <div className="dishes__card__price__container">
            <button className="primary__btn">Add To Cart</button>
            <h5>$15.99</h5>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishesCard;
