import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchByLogin",
  initialState: {
    user: [],
  },
  reducers: {
    setSearchLogin: (state, action) => {
      state.user.push(action.payload);
    },
    cleanData: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setSearchLogin, cleanData } = searchSlice.actions;
export default searchSlice.reducer;
