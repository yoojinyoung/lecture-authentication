import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../api/auth.api";

const accessToken = localStorage.getItem("accessToken");
const initialValue = {
  isLoggedIn: !!accessToken,
  user: {
    id: undefined,
    nickname: undefined,
    avatar: undefined,
  },
};

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ id, pw }, thunkAPI) => {
    if (id && pw) {
      const response = await authAPI.logIn({ id, pw });

      if (response.status === 200) {
        const { accessToken, avatar, nickname, userId } = response.data;
        authAPI.setToken(accessToken);
        localStorage.setItem("accessToken", accessToken);

        return thunkAPI.fulfillWithValue({
          id: userId,
          nickname,
          avatar,
        });
      } else {
        return thunkAPI.rejectWithValue();
      }
    } else if (!!accessToken) {
      authAPI.setToken(accessToken);
      const response = await authAPI.getProfile();
      const { avatar, nickname, userId } = response.data;

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

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ id, pw, nickname }, thunkAPI) => {
    const response = await authAPI.signUp({ id, pw, nickname });

    if (response.status === 201) {
      await thunkAPI.dispatch(logIn({ id, pw }));

      return thunkAPI.fulfillWithValue();
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

      authAPI.setToken();
      localStorage.removeItem("accessToken");
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

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
