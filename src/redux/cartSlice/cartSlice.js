import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;
      try {
        const product = state.items.find((item) => item.id === id);

        if (product) {
          product.amount += 1;
          product.totalPrice += price;
          state.totalAmount += 1;
          state.totalPrice += price;
        } else {
          state.items.push({
            id,
            title,
            image,
            price,
            amount: 1,
            totalPrice: price,
          });
          state.totalAmount += 1;
          state.totalPrice += price;
        }
      } catch (err) {
        return err;
      }
    },

    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      try {
        const product = state.items.find((item) => item.id === id);

        if (product.amount === 1) {
          state.items = state.items.filter((item) => item.id !== id);
          state.totalAmount -= 1;
          state.totalPrice -= price;
        } else {
          product.amount -= 1;
          product.totalPrice -= price;
          state.totalAmount -= 1;
          state.totalPrice -= price;
        }
      } catch (err) {
        return err;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.amount = 0;
      state.totalPrice = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
