import { createSlice } from "@reduxjs/toolkit";

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
            user.user = action.payload.user;
        },
        userAuthFailed: (user, action) =>{
            user.authFailed = action.payload
        }
    }
})

export default slice.reducer;

const { authLoading, userAuth, userAuthFailed } = slice.actions;

