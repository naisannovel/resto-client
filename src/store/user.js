import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api/apiActionTypes";
import jwt_decode from 'jwt-decode';
import _ from 'lodash';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        user: {},
        loading: false,
        authFailed: null
    },
    reducers: {
        authLoading: (user, action) =>{
            user.loading = action.payload
        },
        userAuth: (user, action) =>{
            user.token = action.payload.token;
            user.user = action.payload.data;
            user.authFailed = null;
            user.loading = false;
        },
        userAuthFailed: (user, action) =>{
            user.token = null;
            user.user = {};
            user.authFailed = action.payload
            user.loading = false;
        },
        userLogout: (user,action) =>{
            user.token = null;
            user.user = {};
            user.loading = false;
            user.authFailed = null;
        }
    }
})

export default userSlice.reducer;

const { authLoading, userAuth, userAuthFailed, userLogout } = userSlice.actions;

export const auth = (url,user) =>{
    return apiCallBegan({
        url: url,
        method: 'post',
        data: user,
        onStart: authLoading.type,
        onSuccess: userAuth.type,
        onError: userAuthFailed.type
    })
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('_id');
    return userLogout();
}

export const authCheck = () =>{
    const token = localStorage.getItem('token');
    if(!token){
        return logOut();
    }else{
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if(expirationTime <= new Date()){
            return logOut();
        }else{
            const jwt = JSON.parse(localStorage.getItem('token'));
            const decoded = jwt_decode(jwt);
            const data = _.pick(decoded,["_id","name","email"]);
            return userAuth({ data, token: jwt });
        }
    }
}
