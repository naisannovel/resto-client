import axios from 'axios';
import { apiCallBegan } from './apiActionTypes';
import jwt_decode from 'jwt-decode';

const apiMiddleware = ({dispatch}) => next => async (action) =>{
    
    if(action.type !== apiCallBegan.type) return next(action);
    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    
    dispatch({ type: onStart, payload: true });
    next(action);

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:4001/api',
            url,
            method,
            data
        })

        if(response.data.token && response.data.data.email){
            localStorage.setItem('token',JSON.stringify(response.data.token));
            localStorage.setItem('_id',response.data.data._id);
            const { exp } = jwt_decode(response.data.token);
            const expirationTime = new Date(exp * 1000);
            localStorage.setItem('expirationTime',expirationTime);
        }

        dispatch({ type: onSuccess, payload: response.data })

        } catch(error) {
            dispatch({ type: onError, payload: error.response.data });

         };
}

export default apiMiddleware;