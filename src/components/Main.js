import React from 'react';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';

const Main = () => {
    return (
        <div>
            <Home/>
            {/* <Dashboard/>
            <Login/>
            <SignUp/> */}
        </div>
    );
};

export default Main;