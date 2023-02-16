import { createStore, applyMiddleware } from "redux";
import { reducers } from "./rootReducer.js";
import rootSaga from "../sagas/index.js";

import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
