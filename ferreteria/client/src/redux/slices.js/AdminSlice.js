import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: false,
};

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setAdminStatus: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

export const { setAdminStatus } = adminSlice.actions;
