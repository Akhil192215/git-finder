import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    type: "text",
  },
  reducers: {
    setInputType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setInputType } = inputSlice.actions;

export default inputSlice.reducer;
