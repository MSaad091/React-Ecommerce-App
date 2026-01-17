import { configureStore } from "@reduxjs/toolkit";
import homedataReducer from '../features/homedata'
import CartFunction from '../features/cartFunc'
import ShopProduct from '../features/shopdata'
export const store = configureStore({
    reducer:{
        homedata:homedataReducer,
        cartfunc:CartFunction,
        shopdata:ShopProduct,
    }
})