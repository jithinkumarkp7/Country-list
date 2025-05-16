import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/' }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => 'all?fields=name,region,flag',
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;