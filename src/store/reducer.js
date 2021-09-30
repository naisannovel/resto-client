import { combineReducers } from "redux";
import user from "./user";
import dish from "./dish";
import cart from "./cart";
import { InitialDishForm } from "./forms";
import { createForms } from "react-redux-form";

export const reducer = combineReducers({
    user: user,
    dish: dish,
    cart: cart,
    ...createForms({
        dishForm: InitialDishForm,
    })
})
