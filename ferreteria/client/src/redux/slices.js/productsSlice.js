import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  search: [],
  searchDataTable: [],
  error: "",
};

export const productsSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.productList = payload;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setSearchDataTable: (state, { payload }) => {
      state.searchDataTable = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  setProducts,
  setError,
  setSearch,
  setSearchDataTable,
} = productsSlice.actions;
