import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import precificacoesReducer from "./reducers/precificacoes";
import assuntosReducer from "./reducers/assuntos";
import autoresReducer from "./reducers/autores";
import canaisReducer from "./reducers/canais";
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

import {
  fetchCanalDataSaga
} from "./sagax/canais";

import {
  fetchPrecificacoesDataSaga,
  createPrecificacoesDataSaga
} from "./sagax/precificacoes";

const rootReducer = combineReducers({
  precificacoes: precificacoesReducer,
  assuntos: assuntosReducer,
  autores: autoresReducer,
  livros: livroReducer,
  report: reportReducer,
  canais: canaisReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["assuntos", "autores", "livros", "report", "canais", "precificacoes"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    createPrecificacoesDataSaga(),
    fetchPrecificacoesDataSaga(),
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
    fetchCanalDataSaga(),
  ]);
}

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
