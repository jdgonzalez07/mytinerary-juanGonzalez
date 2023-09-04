import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers.js";

const store = configureStore({
    reducer: {
        citiesReducer
    }
})

export default store;