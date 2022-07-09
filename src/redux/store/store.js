import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import nameReducer from "../slices/nameSlice";
import colculaterReducer from "../slices/colculaterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
    colculater: colculaterReducer,
  }
});

export default store;