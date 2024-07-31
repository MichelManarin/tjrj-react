import api from "../../services/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  EDIT_FAILURE,
  EDIT_REQUEST,
  EDIT_SUCCESS
} from "../actions/livros";

function* fetchlivrosData() {
  try {
    const { data } = yield call(api.get, `v1/livros`);
    yield put({ type: LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LIST_FAILURE, error });
  }
}

function* deletelivrosData({ payload }) {
  try {
    const { data } = yield call(api.delete, `v1/livros/${payload}`);
    yield put({ type: DELETE_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: DELETE_FAILURE, error });
  }
}

function* createlivrosData({ payload }) {
  try {
    const { data } = yield call(api.post, 'v1/livros', payload);
    yield put({ type: CREATE_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: CREATE_FAILURE, error });
  }
}

function* editlivrosData({ payload }) {
  try {
    const { data } = yield call(api.patch, "v1/livros", payload);
    yield put({ type: EDIT_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: EDIT_FAILURE, error });
  }
}

export function* fetchlivrosDataSaga() {
  yield takeLatest(LIST_REQUEST, fetchlivrosData);
}
export function* deletelivrosDataSaga() {
  yield takeLatest(DELETE_REQUEST, deletelivrosData);
}
export function* createlivrosDataSaga() {
  yield takeLatest(CREATE_REQUEST, createlivrosData);
}
export function* editlivrosDataSaga() {
  yield takeLatest(EDIT_REQUEST, editlivrosData);
}
