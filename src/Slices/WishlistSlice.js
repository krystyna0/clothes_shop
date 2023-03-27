import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: []
}

const shopSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.products.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    },
});

export const {addToWishlist, removeFromWishlist} = shopSlice.actions;

export default shopSlice.reducer;