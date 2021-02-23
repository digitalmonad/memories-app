import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/auth.slice";
import { userReducer } from "./user/user.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
