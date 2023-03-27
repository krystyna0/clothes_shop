import {configureStore} from "@reduxjs/toolkit";
import wishlistReducer from "./WishlistSlice"

export default configureStore({
    reducer: {
        state: wishlistReducer
    }
});