import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface AddPayload {
  id: string;
  title: string;
  price: number;
}

interface RemovePayload {
  id: string;
}

type Payload = AddPayload | RemovePayload;

const initialState: CartState = {
  items: [],
}

// Guard check to ensure action is of AddPayload (only add action will have the title)
const isAddPayload = (action: PayloadAction<Payload>): action is PayloadAction<AddPayload> => {
  return 'title' in action;
}

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart(state, action: PayloadAction<Payload>) {
      if (isAddPayload(action)) {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.items[itemIndex].quantity++;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      }
    },
    removeFromCart(state, action: PayloadAction<Payload>) {
      if (!isAddPayload(action)) {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex].quantity--;
        }
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
