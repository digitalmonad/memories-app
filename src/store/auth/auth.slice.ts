import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { RootState } from "../../store/store.config";

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

const loginUser = createAsyncThunk(
  `${SLICE_NAME}/loginUser`,
  (state, thunkAPI) => {}
);

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export const authSelectors = {
  selectAuthToken: (state: RootState) => state.auth.token,
};
