import { createReducer } from "@reduxjs/toolkit";

import { login, signUp, authenticate, signOut } from "../actions/authAction.js";

const initialState = {
  user: {},
  token: null,
  status: "offline",
};

const authReducer = createReducer(initialState, (builder) =>
    builder
    .addCase(login, (state, action) => {
      const newState = { ...state, ...action.payload};
      return newState;
    })
    .addCase(signUp, (state, action) => {
      const newState = { ...state,...action.payload };
      return newState;
    })
    .addCase(authenticate.fulfilled, (state, action) => {
      const newState = { ...state,...action.payload };
      return newState;
    })
    .addCase(signOut, (state, action) => {
      const newState = initialState;
      return newState;
    })
);

export default authReducer;
