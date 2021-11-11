import { all, fork } from 'redux-saga/effects';
import { watchCurrentShow, watchEpisode, watchShows } from './sagas';

export function* rootSaga() {
  yield all([watchShows, watchCurrentShow, watchEpisode].map(fork));
}
