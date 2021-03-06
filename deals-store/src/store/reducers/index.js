import { combineReducers } from "redux";

import setStateOnLoad from './setStateOnLoad';
import updateBasket from './updatedBasket';
import updatedWishlist from './updateWishlist';

let rootReducer = combineReducers({
    onLoad: setStateOnLoad,
    basket: updateBasket,
    wishlist: updatedWishlist
});

export default rootReducer;