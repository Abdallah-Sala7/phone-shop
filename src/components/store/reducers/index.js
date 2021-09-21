import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/types";

export default function cartReducer(state,action){

    if (action.type === ADD_TO_CART) {
       
        if (action.quantity > 0) {
            return {
                cart :[...state.cart,{product: action.productInfo ,quantity: action.quantity}]
            }

        } else {
            return state
        }
        
    } else if (action.type === REMOVE_FROM_CART) {
        
        const itemIndex = action.index;
        const newState = {...state};
        newState.cart.splice(itemIndex,1)
        return newState;
        
    } else if (action.type === CLEAR_CART) {
        
        const newState = {...state};
        newState.cart = []
        return newState;
        
    } else {
        return state
    }
}