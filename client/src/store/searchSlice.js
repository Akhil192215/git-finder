import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchByLogin",
  initialState: {
    user: [],
    search: ''
  },
  reducers: {
    setSearchLogin: (state, action) => {
      state.user.push(action.payload);
    },
    cleanData: (state, action) => {
      state.user = action.payload;
    },
    setSearch:(state,action)=>{
      state.search = action.payload
    }
  },
});
export const { setSearchLogin, cleanData,setSearch } = searchSlice.actions;
export default searchSlice.reducer;
