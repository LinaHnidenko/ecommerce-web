import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice/cartSlice";
import { productsApi } from "./redux/cartSlice/services/productsAPi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
