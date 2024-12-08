import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as basketRedusers } from "./basket/basket.slice";
import { reducer as productRedusers} from "./product/product.slice"

const reducers = combineReducers({
  basket: basketRedusers,
  product: productRedusers
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
