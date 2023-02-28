import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice';
import searchSlice from './searchSlice';


export default configureStore({
  reducer: {
    input: inputReducer,
    login: searchSlice,
  },
});