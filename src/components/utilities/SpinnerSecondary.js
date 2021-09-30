import React from 'react';
import spinner from '../../assets/spinner.gif';

const SpinnerSecondary = () => {
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <img src={spinner} alt='spinner' />
        </div>
    );
};

export default SpinnerSecondary;