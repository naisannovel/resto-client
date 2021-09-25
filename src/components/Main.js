import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from './utilities/Spinner';
const Home = lazy(()=> import('./home/Home'));
const Login = lazy(()=> import('./Authentication/Login'));
const SignUp = lazy(()=> import('./Authentication/SignUp'));
const Dashboard = lazy(()=> import('./dashboard/Dashboard'));

const Main = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/admin/dashboard' exact component={Dashboard} />
            </Switch>
        </Suspense>
    );
};

export default Main;