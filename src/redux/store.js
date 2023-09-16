import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//this is our reducer , it is a collection of reducer storejs
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
