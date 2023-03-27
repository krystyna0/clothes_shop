// export const shopReducer = (state, action) => {
//     const {type, payload} = action;
//
//     switch (type){
//         case "ADD_TO_WISHLIST":
//             return {products: [...state.products, payload]};
//         case "REMOVE_FROM_WISHLIST":
//             const filteredProducts = state.products.filter(product => product.id !== payload)
//             console.log("remove", action );
//             return {
//                 products: filteredProducts
//             }
//         default:
//             return state;
//     }
// };
//
// export const initialState = {
//     products: []
// };

