import { createSlice } from "@reduxjs/toolkit";
const colculater = createSlice(
  {
    name: "colculater",
    initialState: {
      number: 0,
    },
    reducers: {
      increment: (state, action) => {
        state.number = action.payload;
      },
      decrement: (state, action) => {
        state.number = action.payload;
      },
    
      multiple: (state, action) => {
        state.number = action.payload;
      },
      devide: (state, action) => {
        state.number = action.payload;
      },
    },
  }
);

export default colculater.reducer;