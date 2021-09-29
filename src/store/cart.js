import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cart: []
    },
    reducers:{
        addToCart: (cart, action) =>{
            const inCart = cart.cart.find(item => item._id === action.payload._id);
            if(!inCart) {cart.cart.push(action.payload);}
        }
    }
})


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;