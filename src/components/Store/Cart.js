import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const initialState = { showCart: false, items: [] };

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
    refreshCart(state, action) {
      state.items = action.payload;
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://advanced-redux-5aa37-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error();
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error!",
          message: "Failed!!!",
        })
      );
    }
  };
};

export const fetchData = (refreshCart) => {
  return async (dispatch) => {
    const res = await fetch(
      "https://advanced-redux-5aa37-default-rtdb.firebaseio.com/cart.json"
    );
    if (res.ok) {
      const data = await res.json();
      if (data.items) {
        dispatch(refreshCart(data.items));
      }
    }
  };
};

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
