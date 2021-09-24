import React from 'react';
import About from './About';
import Hero from './Hero';
import Navbar from './Navbar';
import PopularDishes from './PopularDishes';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <PopularDishes/>
            <About/>
        </div>
    );
};

export default Home;