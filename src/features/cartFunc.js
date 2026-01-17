// import { createSlice } from "@reduxjs/toolkit";
// import { esbuildVersion } from "vite";

// const CartFunctionality = createSlice({
//     name:'cartfunc',
//     initialState:{
//         items:[],
//          total: 0,

//     },
//     reducers: {
        
//     addproduct: (state,action) => {
         
//         const existing = state.items.find((p) => p.id === action.payload.id)
//         const payloadPrice = Number(action.payload.price)

//         if (existing) {
//            existing.quantity +=1;
//            state.total += existing.price                
//         }else{
//             state.items.push({...action.payload, price: payloadPrice, quantity:1})
//             state.total += payloadPrice
//         }
//     },
//     removeCart:(state,action) => {
//      const existingitem = state.items.find((p) => p.id === action.payload.id)

//      if (existingitem) {
//         if (existingitem.quantity > 1) {
//              existingitem.quantity -=1;
//              state.total -=existingitem.price
//         }else{
//             state.total -=existingitem.price
//             state.items = state.items.filter((p) => p.id !==action.payload.id) 
//         }
//      }
//     },
//   removeAddTocart:(state,action) => {
//     const existing = state.items.find((p) => p.id === action.payload.id)

//     if (existing) {
//          if (existing) {
//          state.items =   state.items.filter((p) => p.id !== action.payload.id)
//          state.total -= existing.price * existing.quantity
//          }
//     }
//   }
//     }
// })
// export const {addproduct,removeCart,removeAddTocart} =  CartFunctionality.actions;
// export default CartFunctionality.reducer;

import { createSlice } from "@reduxjs/toolkit";

const CartFunctionality = createSlice({
  name: "cartfunc",
  initialState: {
    items: [],
    total: 0,
    setSearch:""
  },
  reducers: {
    addproduct: (state, action) => {
      const existing = state.items.find((p) => p.id === action.payload.id);
      const payloadPrice = Number(action.payload.price);

      if (existing) {
        existing.quantity += 1;
        state.total += existing.price;
      } else {
        state.items.push({
          ...action.payload,
          price: payloadPrice,
          quantity: 1,
        });
        state.total += payloadPrice;
      }
    },

    removeCart: (state, action) => {
      const existingitem = state.items.find((p) => p.id === action.payload.id);

      if (existingitem) {
        if (existingitem.quantity > 1) {
          existingitem.quantity -= 1;
          state.total -= existingitem.price;
        } else {
          state.total -= existingitem.price;
          state.items = state.items.filter((p) => p.id !== action.payload.id);
        }
      }
    },
    SearchItem:(state,action) => {
        state.setSearch = action.payload;
    },

    removeAddTocart: (state, action) => {
      const existing = state.items.find((p) => p.id === action.payload.id);
      if (existing) {
        state.items = state.items.filter((p) => p.id !== action.payload.id);
        state.total -= existing.price * existing.quantity;
      }
    },
  },
});

export const { addproduct, removeCart, removeAddTocart,SearchItem } =
  CartFunctionality.actions;
export default CartFunctionality.reducer;
