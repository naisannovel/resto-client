import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDish, fetchMoreDish } from '../../store/dish';
import DishesCard from './DishesCard';
import SpinnerSecondary from '../utilities/SpinnerSecondary';

const Dishes = () => {
    document.title = 'Resto.'
    const [limit,setLimit] = useState(12);
    const [skip,setSkip] = useState(6);
    const dispatch = useDispatch();
    const dishes = useSelector( state => {
        return {
            dish: state.dish.dish,
            loading: state.dish.loading
        }
    })

    let dishesItem = null;
    if(!dishes.loading){
    dishesItem = dishes?.dish?.map(item =>(
                <DishesCard 
                _id={item._id}
                name={item.name}
                price={item.price}
                about={item.about}
                image={item.image?.img}
                />
                ));
    }else{
        dishesItem = <SpinnerSecondary/>
    }

    useEffect(()=> dispatch(fetchDish(6,0)),[])

    return (
        <div data-aos="zoom-in" className='container-fluid popular__dishes__main__container' id='dish'>
            <div className="container" style={{textAlign:'center'}}>
                <div className="title">
                    <p>Our Dishes</p>
                    <h3>POPULAR DISHES</h3>
                </div>
                <div className="row g-5">
                    { dishesItem }
                </div>
                {
                    dishes.dish &&
                    <button 
                    onClick={()=>{
                        setLimit(limit+6);
                        setSkip(limit);
                        dispatch(fetchMoreDish(limit,skip))
                    }}
                    className='primary__btn mt-5' 
                    style={{background:"green"}}
                    >{dishes.loading ? <span className="fa fa-spinner fa-pulse px-4"></span> : "Load More" }</button>
                }
            </div>
        </div>
    );
};

export default Dishes;