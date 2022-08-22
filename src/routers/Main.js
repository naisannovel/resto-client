import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from '../components/utilities/Spinner';
import PrivateRoute from '../components/Authentication/PrivateRoute';
import AdminRoute from '../components/Authentication/AdminRoute';
import { authCheck } from '../store/user';
import { useDispatch } from 'react-redux';
import Navbar from '../components/shared/Navbar';

const Home = lazy(()=> import('./Home'));
const Login = lazy(()=> import('../components/Authentication/Login'));
const SignUp = lazy(()=> import('../components/Authentication/SignUp'));
const Cart = lazy(()=> import('../components/home/Cart'));
const Dashboard = lazy(()=> import('../components/dashboard/Dashboard'));

const Main = () => {
    const dispatch = useDispatch();

    useEffect(()=> dispatch(authCheck()),[])

    return (
        <Suspense fallback={<Spinner/>}>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={SignUp} />
                <PrivateRoute path='/cart'>
                    <Cart/>
                </PrivateRoute>
                <AdminRoute path={`/admin/dashboard`}>
                    <Dashboard/>
                </AdminRoute>
            </Switch>
        </Suspense>
    );
};

export default Main;
