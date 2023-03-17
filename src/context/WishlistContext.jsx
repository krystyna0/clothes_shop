import {createContext, useReducer} from "react";
import {shopReducer, initialState} from "../reducers/WishlistReducer";


export const ShopContext = createContext(null);

export const WishlistProvider = ({children}) => {


    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToWishlist = (product) => {
        dispatch({type: "ADD_TO_WISHLIST", payload: product});
    }

    const removeFromWishlist = (productId) => {
        dispatch({type: "REMOVE_FROM_WISHLIST", payload: productId})
    }

    const value = {
        addToWishlist: addToWishlist,
        removeFromWishlist: removeFromWishlist,
        products: state?.products,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};