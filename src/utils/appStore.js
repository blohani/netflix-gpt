import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./userSlice";
import movies from "./movieSlice";

const reducer = combineReducers({
  user,
  movies,
});

const appStore = configureStore({
  reducer,
});

export default appStore;
