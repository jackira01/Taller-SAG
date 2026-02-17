import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  isLoading: true,
};

export const productsSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.productList = payload;
      state.isLoading = false;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setProducts, setLoading } = productsSlice.actions;

