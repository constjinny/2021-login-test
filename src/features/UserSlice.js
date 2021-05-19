import { createSlice } from "@reduxjs/toolkit";
import { initUserData } from "@data/User";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    authData: initUserData,
  },
  reducers: {
    userSignIn: (state, action) => {},
    userSignOut: (state) => {},
    addNewUser: (state, action) => {},
  },
});

export const userStateAction = userSlice.actions;
export const userStateReducer = userSlice.reducer;

const getAuthStatus = (state) => state.userStateReducer;
const getAuthData = (state) => state.userStateReducer.authData;

export const userStateSelector = { getAuthStatus, getAuthData };
