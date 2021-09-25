import React from 'react';
import DishesCard from './DishesCard';

const Dishes = () => {
    return (
        <div className='container-fluid popular__dishes__main__container' id='dish'>
            <div className="container">
                <div className="title">
                    <p>Our Dishes</p>
                    <h3>POPULAR DISHES</h3>
                </div>
                <DishesCard/>
            </div>
        </div>
    );
};

export default Dishes;