import React from "react";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DishesCard = () => {
  return (
    <div className="popular__dishes__card__container">
      <div className="navbar-icon-hover popular__dishes__card__eye__icon">
        <FontAwesomeIcon icon={faEye} />
      </div>
      <img src="assets/images/dish-1.png" alt="dish-item" />
      <h4>Tasty Food</h4>
      <div className="popular__dishes__card__review__container">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="popular__dishes__card__price__container">
        <h5>$15.99</h5>
        <button className="primary__btn">Add To Cart</button>
      </div>
    </div>
  );
};

export default DishesCard;
