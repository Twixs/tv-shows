import { takeLatest, call, put } from 'redux-saga/effects';
import { getEpisodeDataFail, getEpisodeDataStart, getEpisodeDataSuccess } from '../slices';
import { fetchEpisode } from '../../api';

function* getEpisodeData(action) {
  try {
    const result = yield call(fetchEpisode, action.payload);
    const data = yield result.json();
    yield put(getEpisodeDataSuccess(data));
  } catch (e) {
    yield put(getEpisodeDataFail(e.message));
  }
}

export function* watchEpisode() {
  yield takeLatest(getEpisodeDataStart.type, getEpisodeData);
}
