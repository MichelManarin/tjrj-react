import api from "../../services/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE } from "../actions/canais";

function* fetchCanalData() {
  try {
    const { data } = yield call(api.get, `v1/canais`);
    yield put({ type: LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LIST_FAILURE, error });
  }
}

export function* fetchCanalDataSaga() {
  yield takeLatest(LIST_REQUEST, fetchCanalData);
}
