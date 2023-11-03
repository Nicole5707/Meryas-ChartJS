import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const DataApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }), 
  reducerPath: "DataApi",
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery } = DataApi;
