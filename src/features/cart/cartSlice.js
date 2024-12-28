import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addBook: (state, action) => {
      const exists = state.cartItems.some(
        (book) => book.id === action.payload.id
      );

      let newProduct;
      if (exists) {
        newProduct = state.cartItems.filter(
          (book) => book.id === action.payload.id
        )[0];
        newProduct.amount += 1;
        newProduct.total = newProduct.amount * newProduct.price;
        //console.log(newProduct);
        //state.cartItems = [...state.cartItems, newProduct];

        state.cartItems.map((book) =>
          book.id === newProduct.id ? newProduct : book
        );
      } else {
        newProduct = {
          ...action.payload,
          amount: 1,
          total: action.payload.price,
        };
        state.cartItems.push(newProduct);
      }
    },
    deleteBook: (state, action) => {
      let newProduct;

      newProduct = state.cartItems.filter(
        (book) => book.id === action.payload.id
      )[0];

      newProduct.amount = newProduct.amount - 1;
      newProduct.total = newProduct.amount * newProduct.price;

      if (newProduct.amount <= 0) {
        const index = state.cartItems.indexOf(newProduct);
        if (index > -1) {
          state.cartItems.splice(index, 1);
        }
      } else {
        state.cartItems.map((book) =>
          book.id === newProduct.id ? newProduct : book
        );
      }
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addBook, deleteBook, resetCart } = cartSlice.actions;
