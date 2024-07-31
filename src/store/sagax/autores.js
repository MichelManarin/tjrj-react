import api from "../../services/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE,
  DELETE_FAILURE,
  DELETE_SUCCESS,
  DELETE_REQUEST,
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  EDIT_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS
} from "../actions/autores";

function* fetchAutoresData() {
  try {
    const { data } = yield call(api.get, `v1/autores`);
    yield put({ type: LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LIST_FAILURE, error });
  }
}

function* deleteAutoresData({ payload }) {
  try {
    const { data } = yield call(api.delete, `v1/autores/${payload}`);
    yield put({ type: DELETE_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: DELETE_FAILURE, error });
  }
}

function* createAutoresData({ payload }) {
  try {
    const { data } = yield call(api.post, "v1/autores", payload);
    yield put({ type: CREATE_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: CREATE_FAILURE, error });
  }
}

function* editAutoresData({ payload }) {
  try {
    const { data } = yield call(api.patch, "v1/autores", payload);
    yield put({ type: EDIT_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: EDIT_FAILURE, error });
  }
}

export function* fetchAutoresDataSaga() {
  yield takeLatest(LIST_REQUEST, fetchAutoresData);
}
export function* deleteAutoresDataSaga() {
  yield takeLatest(DELETE_REQUEST, deleteAutoresData);
}
export function* createAutoresDataSaga() {
  yield takeLatest(CREATE_REQUEST, createAutoresData);
}
export function* editAutoresDataSaga() {
  yield takeLatest(EDIT_REQUEST, editAutoresData);
}