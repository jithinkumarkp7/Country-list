import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    all: [],
    visible: [],
    filter: 'All',
    page: 1,
    itemsPerPage: 10,
  },
  reducers: {
    setAllCountries(state, action) {
      state.all = action.payload;
      state.visible = action.payload.slice(0, state.itemsPerPage);
      state.page = 1;
    },
    loadMore(state) {
      const start = state.page * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      const filtered = state.filter === 'All' ? state.all : state.all.filter(c => c.region === state.filter);
      state.visible = [...state.visible, ...filtered.slice(start, end)];
      state.page++;
    },
    filterByRegion(state, action) {
      state.filter = action.payload;
      const filtered = action.payload === 'All' ? state.all : state.all.filter(c => c.region === action.payload);
      state.visible = filtered.slice(0, state.itemsPerPage);
      state.page = 1;
    },
  },
});

export const { actions:{ setAllCountries, loadMore, filterByRegion }} = countrySlice;
export default countrySlice.reducer;