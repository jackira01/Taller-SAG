import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { productsSlice } from "./slices.js/productsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"],
};

const persistedProduct = persistReducer(persistConfig, productsSlice.reducer);

export const store = configureStore({
  reducer: {
    product: persistedProduct,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
