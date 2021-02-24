import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { RootState } from "../../store/store.config";
import { httpClient } from "../../app/httpClient";

const SLICE_NAME = "auth";

type AuthStateT = {
  token: string | null;
};

const initialState: AuthStateT = {
  token: null,
};

export type SaveTokenActionPayloadT = {
  token: string;
};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    saveToken: (state, { payload }: PayloadAction<SaveTokenActionPayloadT>) => {
      state.token = payload.token;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

const authAsyncActions = {
  loginUser: createAsyncThunk<void, { username: string; password: string }>(
    `${SLICE_NAME}/loginUser`,
    async ({ username, password }, { dispatch }) => {
      const response = await httpClient.post("/auth/login", {
        username,
        password,
      });

      console.log(response);
    }
  ),
};

export const authActions = { ...authSlice.actions, ...authAsyncActions };
export const authReducer = authSlice.reducer;
export const authSelectors = {
  selectAuthToken: (state: RootState) => state.auth.token,
};
