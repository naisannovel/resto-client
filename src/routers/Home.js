import React, { lazy, Suspense } from 'react';
import Spinner from '../components/utilities/Spinner';
const Hero = lazy(()=> import('../components/home/Hero'));
const Dishes = lazy(()=> import('../components/home/Dishes'));
const About = lazy(()=> import('../components/home/About'));
const Review = lazy(()=> import('../components/home/Review'));
const Footer = lazy(()=> import('../components/home/Footer'));


const Home = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <Hero/>
            <Dishes/>
            <About/>
            <Review/>
            <Footer/>
        </Suspense>
    );
};

export default Home;