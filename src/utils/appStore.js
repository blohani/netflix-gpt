import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./userSlice";
import movies from "./movieSlice";
import gpt from "./gptSlice";
import changeLanguage from "./configSlice";

const reducer = combineReducers({
  user,
  movies,
  gpt,
  changeLanguage,
});

const appStore = configureStore({
  reducer,
});

export default appStore;
