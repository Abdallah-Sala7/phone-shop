import { createStore } from "redux";
import cartReducer from "./reducers";

function loadState(){
    const state = localStorage.getItem('cart');
    if (state !== null) {
        return JSON.parse(state)
    }
    return{
        cart:[]
    }
}

function saveState(state){
    console.log('saveState..')
    localStorage.setItem('cart', JSON.stringify(state))
}

const store = createStore(cartReducer,loadState())

store.subscribe(() => {
    saveState(store.getState())
})

export default store;