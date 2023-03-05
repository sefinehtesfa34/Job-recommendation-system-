import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "./userReducer.js";
import jobs from "./jobReducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"],
};

const rootReducer = combineReducers({ users, jobs });
const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
