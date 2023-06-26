import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
};

export const errorSlice = createSlice({
  name: 'errorSlice',
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setError } = errorSlice.actions;
