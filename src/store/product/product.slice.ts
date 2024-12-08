import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productState } from "./productData";
import { IProduct } from "../../types/types";

const initialState: IProduct[] = productState;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload: product }: PayloadAction<IProduct>) => {
      state.push(product);
    },
    deleteProduct: (state, { payload: product }: PayloadAction<IProduct>) => {
      let index = state
        .map((x) => {
          return x.id;
        })
        .indexOf(product.id);
      state.splice(index, 1);
    },
    updateProduct: (state, { payload: product }: PayloadAction<IProduct>) => {
      let index = state
        .map((x) => {
          return x.id;
        })
        .indexOf(product.id);
      state.splice(index, 1, product);
    },
  },
});

export const { actions, reducer } = productSlice;
