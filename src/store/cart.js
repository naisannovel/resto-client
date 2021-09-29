import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api/apiActionTypes";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        loading: false,
        cart: [],
        successMsg: null,
        allCartItem: []
    },
    reducers:{
        loading: (cart, action) =>{
            cart.loading = action.payload;
        },
        addToCart: (cart, action) =>{
            const inCart = cart.cart.find(item => item._id === action.payload._id);
            if(!inCart) {cart.cart.push(action.payload);}
        },
        deleteCartItem: (cart, action) =>{
            const filterCart = cart.cart.filter(item => item._id !== action.payload);
            cart.cart = filterCart;
        },
        increaseItemQuantity: (cart, action) =>{
            const itemIndex = cart?.cart?.findIndex(item => item._id === action.payload)
            const item = { ...cart?.cart[itemIndex] };
            
            if(item.quantity < 5){
                item.quantity = item.quantity + 1;
            }
            cart.cart[itemIndex] = item
        },
        decreaseItemQuantity: (cart, action) =>{
            const itemIndex = cart?.cart?.findIndex(item => item._id === action.payload)
            const item = { ...cart?.cart[itemIndex] };
            
            if(item.quantity > 1){
                item.quantity = item.quantity - 1;
            }
            cart.cart[itemIndex] = item
        },
        postCartItem: (cart, action) =>{
            cart.cart = [];
            cart.loading = false;
            cart.successMsg = action.payload;
        },
        getAllCartItem: (cart, action) =>{
            cart.allCartItem = action.payload;
            cart.loading = false;
        }
    }
})


export const { addToCart, deleteCartItem, increaseItemQuantity, decreaseItemQuantity, postCartItem, loading, getAllCartItem } = cartSlice.actions;
export default cartSlice.reducer;

export const saveCartItem = data =>{
    return apiCallBegan({
        url: `/cart`,
        method:'post',
        data: data,
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        onStart: loading.type,
        onSuccess: postCartItem.type
    });
}
export const getCartItem = () =>{
    return apiCallBegan({
        url: `/cart/all/item`,
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        onStart: loading.type,
        onSuccess: getAllCartItem.type
    });
}