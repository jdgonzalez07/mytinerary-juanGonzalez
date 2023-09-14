import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers.js";
import  authReducer  from "./reducers/authReducers.js";

 const store = configureStore({
  reducer: {
    citiesReducer,
    authReducer
  },
});

export default store