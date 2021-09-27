import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api/apiActionTypes";

const slice = createSlice({
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
            user.loading = false;
        },
        userAuthFailed: (user, action) =>{
            user.authFailed = action.payload
            user.loading = false;
        }
    }
})

export default slice.reducer;

const { authLoading, userAuth, userAuthFailed } = slice.actions;

export const auth = user =>{
    return apiCallBegan({
        url: '/signup',
        method: 'post',
        data: user,
        onStart: authLoading.type,
        onSuccess: userAuth.type,
        onError: userAuthFailed.type
    })
}
