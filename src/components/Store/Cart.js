import { createSlice } from "@reduxjs/toolkit";
import { setAutoFreeze } from "immer";
const initialState = { showCart: false, items: [], writable: true };

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    show(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    addItem(state, action) {
      state.items[action.payload].quantity =
        state.items[action.payload].quantity + 1;
    },
    removeItem(state, action) {
      if (state.items[action.payload].quantity === 1) {
        state.items.splice(action.payload, 1);
      } else {
        state.items[action.payload].quantity =
          state.items[action.payload].quantity - 1;
      }
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
