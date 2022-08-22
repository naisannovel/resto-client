import React from 'react';
import Shimmer from './Shimmer';
import './skeleton.css';

const DishSkeleton = () => {

    const SkeletonCard = () => (
        <div className='skeleton__card_container'>
            <>
            <div className='skeleton__img'></div>
            <div>
                <div className='skeleton__title'></div>
                <div className='skeleton__text'></div>
                <div className='skeleton__text'></div>
                <div className='skeleton__text'></div>
            </div>
            </>
            <Shimmer/>
        </div>
    )

    return (
        <>
            {
                [1,2,3,4,5,6].map(num => <SkeletonCard key={num} /> )
            }
        </>
    );
};

export default DishSkeleton;