import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../types";

const SLICE_NAME = "user";

type UserStateT = {
  actualUser: User | null;
};

const initialState: UserStateT = {
  actualUser: null,
};

type SetUserActionPayloadT = {
  user: User;
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<SetUserActionPayloadT>) => {
      state.actualUser = payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
