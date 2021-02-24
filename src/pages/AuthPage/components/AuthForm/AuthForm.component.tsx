import * as yup from "yup";

import { Button, Card, Heading } from "rebass/styled-components";
import { Field, FieldProps, Form, Formik } from "formik";
import { Input, Label } from "@rebass/forms/styled-components";
import React, { FC, useState } from "react";

import { FormWrapper } from "./AuthForm.styled";
import { LoginCredentialsT } from "../../../../types";

const validationSchema = yup.object({
  username: yup.string(),
  password: yup.string(),
});

const MyInput = ({ field, form, ...props }: FieldProps) => {
  return <Input style={{ borderRadius: "5px" }} {...field} {...props} />;
};

type AuthFormPropsT = {
  onSubmit: (credentials: LoginCredentialsT) => void;
};

export const AuthForm: FC<AuthFormPropsT> = ({ onSubmit }) => {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = (e: LoginCredentialsT) => {
    onSubmit(e);
  };
  return (
    <Card px={40} py={20}>
      <Heading>Card</Heading>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <Label htmlFor={"username"}>Username</Label>
            <Field name={"username"} component={MyInput} />
            <Label htmlFor={"password"}>Password</Label>
            <Field name={"password"} component={MyInput} />

            <Button type='submit'>Login</Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
