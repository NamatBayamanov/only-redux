import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: function(state) {
      state.number++;
    },
    decrement: function(state) {
      state.number--;
    },
    reset: function(state) {
      state.number = 0;
    },
    set: function(state, action) {
      state.number = action.payload;
    },
  }
});

export default counterSlice.reducer;