import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errorMessage: '',
};

export const errorSlice = createSlice({
  name: 'errorSlice',
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

export const { setError } = errorSlice.actions;

