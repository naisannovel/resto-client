import React from 'react';
import DishesCard from './DishesCard';

const PopularDishes = () => {
    return (
        <div className='container-fluid popular__dishes__main__container'>
            <div className="container">
                <p>Our Dishes</p>
                <h3>POPULAR DISHES</h3>
                <DishesCard/>
            </div>
        </div>
    );
};

export default PopularDishes;