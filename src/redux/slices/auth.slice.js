import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../api/auth.api";

const initialValue = {
  isLoggedIn: false,
  user: {
    id: undefined,
    nickname: undefined,
    avatar: undefined,
  },
};

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ id, pw }, thunkAPI) => {
    const response = await authAPI.logIn({ id, pw });

    if (response.status === 200) {
      const { accessToken, avatar, nickname, userId } = response.data;
      return thunkAPI.fulfillWithValue({
        id: userId,
        nickname,
        avatar,
      });
    } else {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = {
        id: undefined,
        nickname: undefined,
        avatar: undefined,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        const { id, nickname, avatar } = action.payload;
        const user = { id, nickname, avatar };

        state.user = user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
