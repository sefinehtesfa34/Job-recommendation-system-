import {
  GET_JOBS,
  GET_RECOMMENDED_JOBS,
  SEARCH_JOBS,
} from "../../../constants/actionTypes.js";

export const getJobs = () => {
  return { type: GET_JOBS };
};

export const getRecommendedJobs = (id) => {
  return { type: GET_RECOMMENDED_JOBS, payload: id };
};

export const searchJobs = (search) => {
  return { type: SEARCH_JOBS, payload: search };
};
