import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api/apiActionTypes';

const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        dish: [],
        loading: false,
        dishSuccessMsg: null,
        dishErrMsg: null
    },
    reducers: {
        loading: (dish, action) =>{
            dish.loading = action.payload;
        },
        dishList: (dish, action) =>{
            dish.dish = action.payload;
            dish.loading = false;
            dish.dishSuccessMsg = null;
            dish.dishErrMsg = null;
        },
        dishSuccessMsg: (dish, action) =>{
            dish.dishSuccessMsg = action.payload;
            dish.loading = false;
        },
        dishErrMsg: (dish, action) =>{
            dish.dishErrMsg = action.payload;
            dish.loading = false;
        }
    }
})

export const { loading, dishList, dishSuccessMsg, dishErrMsg } = dishSlice.actions;
export default dishSlice.reducer;

export const dish = () =>{
    return apiCallBegan({
        url: '/dish',
        onStart: loading.type,
        onSuccess: dishList.type,
        onError: dishErrMsg.type
    })
}