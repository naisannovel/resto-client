import axios from 'axios';
import { apiCallBegan } from './apiActionTypes';

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
        
        dispatch({ type: onSuccess, payload: response.data })

        } catch(error) {
            dispatch({ type: onError, payload: error.response.data });

         };
}

export default apiMiddleware;