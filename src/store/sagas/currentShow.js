import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getCurrentShowDataFail, getCurrentShowDataStart, getCurrentShowDataSuccess } from '../slices';
import { fetchShowEpisodes, fetchSingleShow } from '../../api';

function* getCurrentShowData(action) {
  try {
    const results = yield all([call(fetchSingleShow, action.payload), call(fetchShowEpisodes, action.payload)]);
    const [show, episodes] = yield all(results.map((res) => res.json()));
    yield put(getCurrentShowDataSuccess({ show, episodes }));
  } catch (e) {
    yield put(getCurrentShowDataFail(e.message));
  }
}

export function* watchCurrentShow() {
  yield takeLatest(getCurrentShowDataStart.type, getCurrentShowData);
}
