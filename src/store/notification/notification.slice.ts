import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { NotificationKind } from "../../types/notification.types";

const SLICE_NAME = "notification";

type NotificationT = {
  message: string;
  type: NotificationKind;
};

type NotificationsStateT = {
  entities: NotificationT[];
};

const initialState: NotificationsStateT = {
  entities: [],
};

type CreateAlertActionPayloadT = {
  message: string;
  type: NotificationKind;
};

export const notificationSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createAlert: (
      state,
      { payload }: PayloadAction<CreateAlertActionPayloadT>
    ) => {
      state.entities.push({
        message: payload.message,
        type: payload.type,
      });
    },
  },
});

export const notificationActions = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
