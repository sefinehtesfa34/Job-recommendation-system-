import * as types from "../constants/actionTypes.js";

const initialState = {
  loading: false,
  success: false,
  failed: false,
  message: "",
  users: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch all conditions

    case types.GET_JOBS:
      return {
        ...state,
        loading: true,
      };

    case types.GET_RECOMMENDED_JOBS:
      return {
        ...state,
        loading: true,
      };

    case types.SEARCH_JOBS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_JOB_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        success: true,
      };
    case types.GET_JOB_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // Create user conditions

    default:
      return state;
  }
};

export default jobReducer;
