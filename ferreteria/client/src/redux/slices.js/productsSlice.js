import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
};

export const productsSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.productList = payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
