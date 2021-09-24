import React from 'react';
import About from './About';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Dishes from './Dishes';
import Review from './Review';
import Cart from './Cart';

const Home = () => {
    return (
        <div>
            <Navbar/>
            {/* <Hero/>
            <Dishes/>
            <About/>
            <Review/>
            <Footer/> */}
            <Cart/>
        </div>
    );
};

export default Home;