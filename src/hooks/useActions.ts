import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as basketActions } from "../store/basket/basket.slice";
import { actions as productActions } from "../store/product/product.slice";

const rootActions = { ...basketActions, ...productActions };

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
