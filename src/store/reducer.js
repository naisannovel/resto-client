import { combineReducers } from "redux";
import user from "./user";
import dish from "./dish";

export const reducer = combineReducers({
    user: user,
    dish: dish
})