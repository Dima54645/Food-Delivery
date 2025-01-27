import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as basketRedusers } from "./basket/basket.slice";
import { api } from "./api/api";

const reducers = combineReducers({
  basket: basketRedusers,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
