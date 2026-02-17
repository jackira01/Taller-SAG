import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  rol: null,
};

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setAdminStatus: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn;
      state.user = payload.user;
      state.rol = payload.rol;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.rol = null;
    },
  },
});

export const { setAdminStatus, logout } = adminSlice.actions;

