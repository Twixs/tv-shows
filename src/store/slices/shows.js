import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: null,
  error: false,
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    getShowsStart: (state) => {
      state.loading = true;
    },
    getShowsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    getShowsFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getShowsStart, getShowsSuccess, getShowsFail } = showsSlice.actions;

export const selectShows = (state) => state.shows;

export default showsSlice.reducer;
