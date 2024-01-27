import cartSlice from "./storeSlice"
const { configureStore } = require("@reduxjs/toolkit");

let store=configureStore({
    reducer:cartSlice
});


export default store;