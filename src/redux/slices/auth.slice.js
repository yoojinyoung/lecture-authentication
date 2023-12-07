import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isLoggedIn: false,
  user: {
    id: undefined,
    nickname: undefined,
    avatar: undefined,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
