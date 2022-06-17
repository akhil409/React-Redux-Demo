import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from './IceCream/IceCreamReducer';
import snacksReducer from "./Snacks/SnacksReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    snacks:snacksReducer
})

export default rootReducer;