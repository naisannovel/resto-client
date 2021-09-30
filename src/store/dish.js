import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api/apiActionTypes';


const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        dish: [],
        allDishList: [],
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
        loadMoreDish: (dish, action) =>{
            dish.dish.push(...action.payload);
            dish.loading = false;
        },
        loadAllDishes: (dish, action) =>{
            dish.allDishList = action.payload;
            dish.loading = false;
        },
        dishSuccessMsg: (dish, action) =>{
            dish.dishSuccessMsg = action.payload;
            dish.loading = false;
        },
        dishErrMsg: (dish, action) =>{
            dish.dishErrMsg = action.payload;
            dish.loading = false;
        },
        dishAdd: (dish, action) =>{
            dish.dish.push(action.payload.result);
            dish.loading = false;
            dish.dishSuccessMsg = action.payload.msg;
            dish.dishErrMsg = null;
        },
        dishPriceUpdate: (dish, action) =>{
            const findIndex = dish.allDishList.findIndex(item => item._id === action.payload._id);
            dish.allDishList[findIndex] = action.payload
            dish.loading = false;
            dish.dishSuccessMsg = null;
            dish.dishErrMsg = null;
        },
        dishDelete: (dish, action) =>{
            const filterDishes = dish.allDishList.filter(item => item._id !== action.payload.id);
            dish.allDishList = filterDishes
            dish.loading = false;
            dish.dishSuccessMsg = action.payload.msg;
            dish.dishErrMsg = null;
        }
    }
})

export const { loading, dishList, dishSuccessMsg, dishErrMsg, dishAdd, dishPriceUpdate, dishDelete, loadAllDishes, loadMoreDish } = dishSlice.actions;
export default dishSlice.reducer;

export const fetchDish = (limit,skip) =>{
    return apiCallBegan({
        url: `/dish?limit=${limit}&skip=${skip}`,
        onStart: loading.type,
        onSuccess: dishList.type,
        onError: dishErrMsg.type
    })
}

export const fetchMoreDish = (limit,skip) =>{
    return apiCallBegan({
        url: `/dish?limit=${limit}&skip=${skip}`,
        onStart: loading.type,
        onSuccess: loadMoreDish.type
    })
}

export const fetchAllDish = () =>{
    return apiCallBegan({
        url: `/dish`,
        onStart: loading.type,
        onSuccess: loadAllDishes.type,
    })
}

export const dishAdded = data =>{
    return apiCallBegan({
        url: '/dish',
        method: 'post',
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        onStart: loading.type,
        onSuccess: dishAdd.type,
        onError: dishErrMsg.type
    })
}

export const dishUpdate = (id,data) =>{
    return apiCallBegan({
        url: `/dish/${id}`,
        data: data,
        method:'put',
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        onStart: loading.type,
        onSuccess: dishPriceUpdate.type,
        onError: dishErrMsg.type
    })
}

export const deleteDishItem = id =>{
    return apiCallBegan({
        url: `/dish/${id}`,
        method:'delete',
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        onStart: loading.type,
        onSuccess: dishDelete.type,
        onError: dishErrMsg.type
    })
}