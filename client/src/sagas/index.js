import { all } from "redux-saga/effects";

import userSaga from "./userSaga.js";
import jobSaga from "./jobSaga.js";

export default function* rootSaga() {
  yield all([userSaga(), jobSaga()]);
}
