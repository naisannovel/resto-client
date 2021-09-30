import { combineReducers } from "redux";
import user from "./user";
import dish from "./dish";
import cart from "./cart";

export const reducer = combineReducers({
    user: user,
    dish: dish,
    cart: cart
})
