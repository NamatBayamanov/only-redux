import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import nameReducer from "../slices/nameSlice"
const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  }
});

export default store;