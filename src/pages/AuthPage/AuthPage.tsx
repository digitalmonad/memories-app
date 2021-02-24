import { AuthForm } from "./components/AuthForm/AuthForm.component";
import { Flex } from "rebass/styled-components";
import { LoginCredentials } from "../../types";
import React from "react";
import { authActions } from "../../store/auth/auth.slice";
import { useDispatch } from "react-redux";

export const AuthPage = () => {
  const dispatch = useDispatch();

  const onSubmit = (credentials: LoginCredentials) => {
    dispatch(authActions.loginUser(credentials));
  };
  return (
    <Flex
      flexDirection={["column", "row"]}
      flexGrow={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AuthForm {...{ onSubmit }}></AuthForm>
    </Flex>
  );
};

export default AuthPage;
