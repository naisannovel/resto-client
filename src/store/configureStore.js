import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = ()=>{
    return configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}

export default store;