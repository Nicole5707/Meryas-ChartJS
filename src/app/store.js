import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {DataApi} from "../api/data";
export const store = configureStore({
  reducer: {
    [DataApi.reducerPath]: DataApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(DataApi.middleware),
});
setupListeners(store.dispatch);

export default store; 