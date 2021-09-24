import React from 'react';
import About from './About';
import Hero from './Hero';
import Navbar from './Navbar';
import PopularDishes from './PopularDishes';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <PopularDishes/>
            <About/>
            <Review/>
        </div>
    );
};

export default Home;