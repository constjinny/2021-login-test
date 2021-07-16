import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initUserData } from "@data/user.data";
import { userApi } from "@api/userApi";

export const userSignIn = createAsyncThunk(
  "user/signUpApi",
  async (userData, thunkAPI) => {
    try {
      const result = await userApi.postUserSignIn(userData);
      if (result.id) {
        const { nickName = "", id, description = "", profileUrl = "" } = result;
        const parsed = { nickName, id, description, profileUrl };
        return { value: parsed };
      } else {
        return { value: null };
      }
    } catch (err) {
      console.log("err", err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    authStatus: false,
    userData: initUserData,
  },
  reducers: {
    updateUserData: (state, action) => {
      console.log("userSignIn action", action);
      //   const { id = "", password = "" } = action.payload;
      //   const result = signUpApi({ id, password });
      //   console.log("result!!!", result);
      //   if (result) {
      //     return state;
      //   }
      //   return state;
    },
    userSignOut: (state) => {
      state.authStatus = false;
      state.userData = initUserData;
    },
  },
  extraReducers: {
    [userSignIn.fulfilled]: (state, action) => {
      const { value } = action.payload;
      if (value) {
        state.authStatus = true;
        state.userData = value;
      } else {
        alert("일치하는 유저 정보 없음");
      }
    },
  },
});

export const userStateAction = userSlice.actions;
export const userStateReducer = userSlice.reducer;

const getAuthStatus = (state) => state.userStateReducer.authStatus;
const getUserData = (state) => state.userStateReducer.userData;
const getAllData = (state) => state.userStateReducer;

export const userStateSelector = { getAuthStatus, getUserData, getAllData };
