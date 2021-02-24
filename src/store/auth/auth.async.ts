import { LoginCredentialsT } from "../../types";
import { NotificationKind } from "../../types/notification.types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "../../app/httpClient";
import { notificationActions } from "../notification/notification.slice";

type LoginUserSuccessPayloadT = {
  token: string;
};

const SLICE_NAME = "auth";

export const authAsyncActions = {
  loginUser: createAsyncThunk<LoginUserSuccessPayloadT, LoginCredentialsT>(
    `${SLICE_NAME}/loginUser`,
    async ({ username, password }, { dispatch }) => {
      try {
        const { token }: any = await httpClient.post<{ token: string }>(
          "/auth/login",
          {
            username,
            password,
          }
        );

        dispatch(
          notificationActions.createAlert({
            message: "Login Successful",
            type: NotificationKind.success,
          })
        );
        return { token };
      } catch (error) {
        dispatch(
          notificationActions.createAlert({
            message: error.message,
            type: NotificationKind.error,
          })
        );
        throw error;
      }
    }
  ),
};
