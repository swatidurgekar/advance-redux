import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    show(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
