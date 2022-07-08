import { createSlice } from "@reduxjs/toolkit";
const name = createSlice({
  name: "name",
  initialState: {
    name: "",
  },
  reducers: {
    change: (state, action) => {
      state.name = action.payload;
    }
  },
});

export default name.reducer;