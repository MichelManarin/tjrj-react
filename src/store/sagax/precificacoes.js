import api from "../../services/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE,
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
} from "../actions/precificacoes";

function* fetchPrecificacoesData({ payload }) {
  try {
    const { data } = !!payload
      ? yield call(api.get, `v1/precificacoes?codl=${payload}`)
      : yield call(api.get, `v1/precificacoes`);
    yield put({ type: LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LIST_FAILURE, error });
  }
}

function* createPrecificacoesData({ payload }) {
  try {
    const { data } = yield call(api.post, "v1/precificacoes", payload);
    yield put({ type: CREATE_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST, payload: data });
  } catch (error) {
    yield put({ type: CREATE_FAILURE, error });
  }
}

export function* fetchPrecificacoesDataSaga() {
  yield takeLatest(LIST_REQUEST, fetchPrecificacoesData);
}

export function* createPrecificacoesDataSaga() {
  yield takeLatest(CREATE_REQUEST, createPrecificacoesData);
}
