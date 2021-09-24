import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import PopularDishes from './PopularDishes';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <PopularDishes/>
        </div>
    );
};

export default Home;