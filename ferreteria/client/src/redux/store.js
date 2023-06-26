import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { productsSlice } from './slices.js/productsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { adminSlice } from './slices.js/AdminSlice';
import { filterSlice } from './slices.js/filterSlice';
import { errorSlice } from './slices.js/errorSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth'],
};

const persistedProduct = persistReducer(persistConfig, productsSlice.reducer);
const persistedAdmin = persistReducer(persistConfig, adminSlice.reducer);

export const store = configureStore({
  reducer: {
    product: persistedProduct,
    admin: persistedAdmin,
    filter: filterSlice.reducer,
    error: errorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
