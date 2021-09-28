import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dish } from '../../store/dish';
import DishesCard from './DishesCard';

const Dishes = () => {
    const dispatch = useDispatch();

    useEffect(()=> dispatch(dish()),[])

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