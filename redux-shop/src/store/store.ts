import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
});

// Export dispatch type
export type AppDispatch = typeof store.dispatch;
