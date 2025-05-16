import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../features/countries/countriesApi';
import countryReducer from '../features/countries/countrySlice';

const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    countries: countryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export default store;