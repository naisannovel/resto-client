import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Spinner from './utilities/Spinner';
import PrivateRoute from './Authentication/PrivateRoute';
import AdminRoute from './Authentication/AdminRoute';
import { authCheck } from '../store/user';
import { useDispatch } from 'react-redux';

const Home = lazy(()=> import('./home/Home'));
const Login = lazy(()=> import('./Authentication/Login'));
const SignUp = lazy(()=> import('./Authentication/SignUp'));
const Cart = lazy(()=> import('./home/Cart'));
const Dashboard = lazy(()=> import('./dashboard/Dashboard'));

const Main = () => {
    const dispatch = useDispatch();

    useEffect(()=>{ dispatch(authCheck()) },[])

    return (
        <Suspense fallback={<Spinner/>}>
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
