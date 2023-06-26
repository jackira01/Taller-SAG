import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: [],
  searchDataTableFilter: [],
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setSearchDataTable: (state, { payload }) => {
      state.searchDataTableFilter = payload;
    },
  },
});

export const { setSearch, setSearchDataTable } = filterSlice.actions;
