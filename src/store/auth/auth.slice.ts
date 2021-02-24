import { RootState } from "../../store/store.config";
import { authAsyncActions } from "./auth.async";
import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "auth";

type AuthStateT = {
  token: string | null;
};

const initialState: AuthStateT = {
  token: null,
};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      authAsyncActions.loginUser.fulfilled,
      (state, { payload }) => {
        state.token = payload.token;
      }
    );
  },
});

export const authActions = { ...authSlice.actions, ...authAsyncActions };
export const authReducer = authSlice.reducer;
export const authSelectors = {
  selectAuthToken: (state: RootState) => state.auth.token,
};
