import * as types from "../constants/actionTypes.js";

const initialState = {
  currentUser: null,
  loading: false,
  success: false,
  failed: false,
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch all conditions
    case types.CLEAN_UP:
      return {
        ...state,
        loading: false,
        success: false,
        message: "",
      };

    case types.LOG_OUT:
      return {
        ...state,
        currentUser: null,
      };

    case types.FETCH_ALL_USER:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        success: true,
      };
    case types.FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // Create user conditions
    case types.CREATE_USER:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        success: true,
        loading: false,
      };
    case types.CREATE_USER_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
        message: action.payload,
      };

    // Update employee conditions
    case types.UPDATE_USER:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case types.UPDATE_USER_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
        // message: action.payload,
      };
    // Delete employee
    case types.DELETE_USER:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
        success: true,
      };
    case types.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
        // message: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
