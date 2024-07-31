import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import assuntosReducer from "./reducers/assuntos";
import autoresReducer from "./reducers/autores";
import livroReducer from "./reducers/livros";
import reportReducer from "./reducers/report";

import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import { all } from "redux-saga/effects";

import {
  fetchAssuntosDataSaga,
  deleteAssuntosDataSaga,
  createAssuntosDataSaga,
  editAssuntosDataSaga,
} from "./sagax/assuntos";

import {
  editAutoresDataSaga,
  fetchAutoresDataSaga,
  deleteAutoresDataSaga,
  createAutoresDataSaga,
} from "./sagax/autores";

import {
  createlivrosDataSaga,
  deletelivrosDataSaga,
  editlivrosDataSaga,
  fetchlivrosDataSaga,
} from "./sagax/livros";

import {
  fetchReportDataSaga
} from "./sagax/report";


const rootReducer = combineReducers({
  assuntos: assuntosReducer,
  autores: autoresReducer,
  livros: livroReducer,
  report: reportReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["assuntos", "autores", "livros", "report"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    fetchAssuntosDataSaga(),
    fetchAutoresDataSaga(),
    deleteAssuntosDataSaga(),
    deleteAutoresDataSaga(),
    createAssuntosDataSaga(),
    createAutoresDataSaga(),
    editAssuntosDataSaga(),
    editAutoresDataSaga(),
    createlivrosDataSaga(),
    deletelivrosDataSaga(),
    editlivrosDataSaga(),
    fetchlivrosDataSaga(),
    fetchReportDataSaga(),
  ]);
}

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
