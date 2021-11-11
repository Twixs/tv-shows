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
      state.loading = false;
      state.data = action.payload;
    },
    getShowsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getShowsStart, getShowsSuccess, getShowsFail } = showsSlice.actions;

export const selectShows = (state) => state.shows;

export default showsSlice.reducer;
