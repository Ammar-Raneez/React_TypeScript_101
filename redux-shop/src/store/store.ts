import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
});

// Export state type for use selector
// ReturnType extracts the return type of the function call
export type RootState = ReturnType<typeof store.getState>;

// Export dispatch type of our state
export type AppDispatch = typeof store.dispatch;
