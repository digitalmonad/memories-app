import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserT } from "../../types";

const SLICE_NAME = "user";

type UserStateT = {
  actualUser: UserT | null;
};

const initialState: UserStateT = {
  actualUser: null,
};

type SetUserActionPayloadT = {
  user: UserT;
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
