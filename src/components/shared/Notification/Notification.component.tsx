import { Content, Message, Root } from "./Notification.styled";
import { Icon, IconKind, IconVariantT } from "../../atoms/Icon.component";
import React, { useEffect, useState } from "react";

import { RootState } from "../../../store/store.config";
import { useSelector } from "react-redux";

export const Notification = () => {
  const { entities: notifications } = useSelector(
    (state: RootState) => state.notification
  );
  const [notification, setNotification] = useState({ type: "", message: "" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (notifications.length > 0) {
      setNotification(notifications[notifications.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [notifications]);

  const onClose = () => {
    setShow(false);
  };

  const color = notification.type === "success" ? "teal" : "tomato";
  const iconType =
    notification.type === "success" ? IconKind.success : IconKind.error;
  return show ? (
    <Root className={`${notification.type || "error"}`}>
      <Content>
        <Icon icon={iconType} color={color} size='20px' />
        <Message>{notification.message || ""}</Message>
      </Content>
      <Icon
        icon={IconKind.close}
        color={color}
        size='24px'
        onClick={onClose}
        style={{ cursor: "pointer" }}
      />
    </Root>
  ) : null;
};
