import { createSlice } from "@reduxjs/toolkit";

const homedataSlice = createSlice({
   name:'homedata',
   initialState: {
    products:[
        {
            id:"1",
            name:"Shoes",
            bname:"Nike",
            img: '/public/banner.jpg',
            price:"2000",
            info: '50% Off This Shoes'
        },
        {
            id:"2",
            name:"Shoes",
            bname:"Nike",
           img: '/public/sheoes3 (2).jpg',
            price:"3000",
            info: '50% Off This Shoes'
        },
        {
            id:"3",
            name:"Shoes",
            bname:"Nike",
           img: '/public/shoes1 (3).jpg',
            price:"4000",
            info: '50% Off This Shoes'
        },
        {
            id:"4",
            name:"Shoes",
            bname:"Nike",
       img: '/public/shoes1 (1).jpg',
            price:"5000",
            info: '50% Off This Shoes'
        },
          {
            id:"5",
            name:"Shoes",
            bname:"Nike",
           img: '/public/shoes1 (1).jpg',
            price:"5000",
            info: '50% Off This Shoes'
        } , {
            id:"6",
            name:"Shoes",
            bname:"Nike",
       img: '/public/shoes1 (1).jpg',
            price:"5000",
            info: '50% Off This Shoes'
        },
         {
            id:"7",
            name:"Bage",
            bname:"Addidad",
       img: '/public/shoes1 (1).jpg',
            price:"5000",
            info: '50% Off This Shoes'
        },
        {
            id:"8",
            name:"HeadPhone",
            bname:"Audionic",
       img: '/public//banner2.jpg',
            price:"8000",
            info: '10% Off This HeadPhone'
        },
       
    ]
   }
})
export default homedataSlice.reducer;