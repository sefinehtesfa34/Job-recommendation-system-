import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../constants/actionTypes.js";
import * as api from "../features/jobs/api/index.js";

function* getJobs() {
  try {
    const jobs = yield call(api.getJobs);
    yield put({ type: types.GET_JOB_SUCCESS, payload: jobs });
  } catch (error) {
    yield put({ type: types.GET_JOB_FAILED, message: error.message });
  }
}

function* getRecommendedJobs({ payload }) {
  try {
    const jobs = yield call(api.getRecommendedJobs, payload);
    yield put({ type: types.GET_JOB_SUCCESS, payload: jobs });
  } catch (error) {
    yield put({
      type: types.GET_JOB_FAILED,
      payload: error,
    });
  }
}

function* searchJobs({ payload }) {
  try {
    const jobs = yield call(api.searchJobs, payload);
    yield put({ type: types.GET_JOB_SUCCESS, payload: jobs });
  } catch (error) {
    yield put({
      type: types.GET_JOB_FAILED,
      payload: error,
    });
  }
}

function* jobSaga() {
  yield takeEvery(types.GET_JOBS, getJobs);
  yield takeEvery(types.GET_RECOMMENDED_JOBS, getRecommendedJobs);
  yield takeEvery(types.SEARCH_JOBS, searchJobs);
}

export default jobSaga;
