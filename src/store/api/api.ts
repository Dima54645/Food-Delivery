import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../types/types";

const API_URL = "http://localhost:4200/products";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], null>({
      query: () => "/",
      providesTags: () => [
        {
          type: "product",
        },
      ],
    }),
  }),
});

export const { useGetProductsQuery } = api;
