import { all } from "redux-saga/effects";

import userSaga from "./userSaga.js";

export default function* rootSaga() {
  yield all([userSaga()]);
}
