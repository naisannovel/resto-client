import React, { lazy, Suspense } from 'react';
import Spinner from '../utilities/Spinner';
const Navbar = lazy(()=> import('./Navbar'));
const Hero = lazy(()=> import('./Hero'));
const Dishes = lazy(()=> import('./Dishes'));
const About = lazy(()=> import('./About'));
const Review = lazy(()=> import('./Review'));
const Footer = lazy(()=> import('./Footer'));


const Home = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <Navbar/>
            <Hero/>
            <Dishes/>
            <About/>
            <Review/>
            <Footer/>
        </Suspense>
    );
};

export default Home;