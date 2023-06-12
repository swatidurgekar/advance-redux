import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Cart";
import uiSlice from "./ui-slice";

const Store = configureStore({
  reducer: { cart: Cart, ui: uiSlice },
});

export default Store;
