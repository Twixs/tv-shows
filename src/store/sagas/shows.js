import { takeLatest, call, put } from 'redux-saga/effects';
import { getShowsFail, getShowsStart, getShowsSuccess } from '../slices';
import { fetchShowsList } from '../../api';

function* getShowsData() {
  try {
    const response = yield call(fetchShowsList);
    const data = yield response.json();
    yield put(getShowsSuccess(data));
  } catch (e) {
    yield put(getShowsFail(e.message));
  }
}

export function* watchShows() {
  yield takeLatest(getShowsStart.type, getShowsData);
}
