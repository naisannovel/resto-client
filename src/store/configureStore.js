import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "./api/apiMiddleware";
import { reducer } from "./reducer";

const store = ()=>{
    return configureStore({
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
          }).concat(apiMiddleware)
    })
}

export default store;