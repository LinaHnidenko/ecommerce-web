import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "0561863ecdmsha19dc02207be928p1f1a09jsn4563bc2d6a3e",
  "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers });

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () =>
        createRequest(
          "/products/list?country=us&lang=en&currentpage=0&pagesize=30"
        ),
    }),
    getCategories: builder.query({
      query: () => createRequest("/categories/list?country=us&lang=en"),
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;
