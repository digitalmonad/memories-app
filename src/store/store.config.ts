import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { authReducer } from "./auth/auth.slice";
import { notificationReducer } from "./notification/notification.slice";
import { userReducer } from "./user/user.slice";

const reducer = {
  auth: authReducer,
  user: userReducer,
  notification: notificationReducer,
};

export const store = configureStore({
  reducer,
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
