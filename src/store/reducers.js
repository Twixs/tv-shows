import { currentShowReducer, episodesReducer, showsReducer } from './slices';

export const reducers = {
  shows: showsReducer,
  currentShow: currentShowReducer,
  episodes: episodesReducer,
};
