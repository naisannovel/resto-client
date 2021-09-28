import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDish } from '../../store/dish';
import DishesCard from './DishesCard';

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector( state => {
        return {
            dish: state.dish.dish
        }
    })

    console.log(dishes?.dish[0]?.image);
    const dishesItem = dishes?.dish?.map(item =>(
        <DishesCard 
        name={item.name}
        price={item.price}
        about={item.about}
        image={item.image?.img}
        />
    ))

    useEffect(()=> dispatch(fetchDish()),[])

    return (
        <div data-aos="zoom-in" className='container-fluid popular__dishes__main__container' id='dish'>
            <div className="container">
                <div className="title">
                    <p>Our Dishes</p>
                    <h3>POPULAR DISHES</h3>
                </div>
                <div className="row g-5">
                    { dishesItem }
                </div>
            </div>
        </div>
    );
};

export default Dishes;