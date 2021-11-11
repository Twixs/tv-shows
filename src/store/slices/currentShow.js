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
      state.show = action.payload.show;
      state.episodes = action.payload.episodes;
      state.loading = false;
    },
    getCurrentShowDataFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getCurrentShowDataStart, getCurrentShowDataSuccess, getCurrentShowDataFail } = currentShowSlice.actions;

export const selectCurrentShow = (state) => state.currentShow;

export default currentShowSlice.reducer;
