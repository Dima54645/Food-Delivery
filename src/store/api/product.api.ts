import { IProduct, IProductsData } from "../../types/types";
import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<null, IProductsData>({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "product",
        },
      ],
    }),
    updateProduct: builder.mutation<null, IProduct>({
      query: (recipe) => ({
        body: recipe,
        url: `/${recipe.id}`,
        method: "PUT",
      }),
      invalidatesTags: () => [
        {
          type: "product",
        },
      ],
    }),
    deleteProduct: builder.mutation<null, number>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "product",
        },
      ],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
