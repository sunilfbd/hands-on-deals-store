import { combineReducers } from "redux";

import setStateOnLoad from './setStateOnLoad';
import updateBasket from './updatedBasket';
import updatedWishlist from './updateWishlist';

let rootReducer = combineReducers({
    setStateOnLoad,
    updateBasket,
    updatedWishlist
});

export default rootReducer;