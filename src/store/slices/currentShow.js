import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  show: null,
  episodes: null,
  error: false,
};

export const currentShowSlice = createSlice({
  name: 'currentShow',
  initialState,
  reducers: {
    getCurrentShowDataStart: (state) => {
      state.loading = true;
    },
    getCurrentShowDataSuccess: (state, action) => {
      state.loading = false;
      state.show = action.payload.show;
      state.episodes = action.payload.episodes;
    },
    getCurrentShowDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCurrentShowDataStart, getCurrentShowDataSuccess, getCurrentShowDataFail } = currentShowSlice.actions;

export const selectCurrentShow = (state) => state.currentShow;

export default currentShowSlice.reducer;
