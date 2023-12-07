import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    if (true) {
      return thunkAPI.fulfillWithValue({
        id,
        nickname: "helloWorld",
        avatar: null,
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
