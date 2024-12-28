import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../features/books/booksSlice";
import { cartSlice } from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    book: booksSlice.reducer,
    cart: cartSlice.reducer,
  },
});
