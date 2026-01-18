import { createSlice } from "@reduxjs/toolkit";

const ShopSlice = createSlice({
    name: 'shopdata',
    initialState: {
        Shopproduct: [
            {
                id: "1",
                name: "Shoes",
                bname: "Nike",
                img: '/images/sheoes3-1.jpg',
                price: "2000",
                info: '50% Off This Shoes'
            },
            {
                id: "2",
                name: "Shoes",
                bname: "Nike",
                img: '/images/sheoes3-2.jpg',
                price: "3000",
                info: '50% Off This Shoes'
            },
            {
                id: "3",
                name: "Shoes",
                bname: "Nike",
                img: '/images/shoes1-3.jpg',
                price: "4000",
                info: '50% Off This Shoes'
            },
            {
                id: "5",
                name: "Shoes",
                bname: "Nike",
                img: '/images/shoes1-1.jpg',
                price: "5000",
                info: '50% Off This Shoes'
            },
            {
                id: "6",
                name: "Shoes",
                bname: "Nike",
                img: '/images/shoes1-1.jpg',
                price: "5000",
                info: '50% Off This Shoes'
            },
            {
                id: "7",
                name: "Shoes",
                bname: "Nike",
                img: '/images/shoes1-1.jpg',
                price: "5000",
                info: '50% Off This Shoes'
            },
            {
                id: "8",
                name: "Bage",
                bname: "Adidas",
                img: '/images/shoes1-1.jpg',
                price: "5000",
                info: '50% Off This Bage'
            }
        ]
    }
});

export default ShopSlice.reducer;
