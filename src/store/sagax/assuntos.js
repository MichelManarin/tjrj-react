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
} from "../actions/assuntos";

function* fetchAssuntosData() {
  try {
    const { data } = yield call(api.get, `v1/assuntos`);
    yield put({ type: LIST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LIST_FAILURE, error });
  }
}

function* deleteAssuntosData({ payload }) {
  try {
    const { data } = yield call(api.delete, `v1/assuntos/${payload}`);
    yield put({ type: DELETE_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: DELETE_FAILURE, error });
  }
}

function* createAssuntosData({ payload }) {
  try {
    const { data } = yield call(api.post, 'v1/assuntos', payload);
    yield put({ type: CREATE_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: CREATE_FAILURE, error });
  }
}

function* editAssuntosData({ payload }) {
  try {
    const { data } = yield call(api.patch, "v1/assuntos", payload);
    yield put({ type: EDIT_SUCCESS, payload: data });
    yield put({ type: LIST_REQUEST });
  } catch (error) {
    yield put({ type: EDIT_FAILURE, error });
  }
}

export function* fetchAssuntosDataSaga() {
  yield takeLatest(LIST_REQUEST, fetchAssuntosData);
}
export function* deleteAssuntosDataSaga() {
  yield takeLatest(DELETE_REQUEST, deleteAssuntosData);
}
export function* createAssuntosDataSaga() {
  yield takeLatest(CREATE_REQUEST, createAssuntosData);
}
export function* editAssuntosDataSaga() {
  yield takeLatest(EDIT_REQUEST, editAssuntosData);
}
