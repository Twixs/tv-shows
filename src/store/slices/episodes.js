import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  current: null,
  error: false,
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    getEpisodeDataStart: (state) => {
      state.loading = true;
    },
    getEpisodeDataSuccess: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
    getEpisodeDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getEpisodeDataStart, getEpisodeDataSuccess, getEpisodeDataFail } = episodesSlice.actions;

export const selectEpisodes = (state) => state.episodes;

export default episodesSlice.reducer;
