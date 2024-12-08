import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

const initialState: IProduct[] = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, { payload: product }: PayloadAction<IProduct>) => {
      state.push(product);
    },
    deleteBasket: (state, { payload: product }: PayloadAction<IProduct>) => {
      let index = state
        .map((x) => {
          return x.id;
        })
        .indexOf(product.id);
      state.splice(index, 1);
    },
  },
});

export const { actions, reducer } = basketSlice;
