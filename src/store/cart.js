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
        }
    }
})


export const { addToCart, deleteCartItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;