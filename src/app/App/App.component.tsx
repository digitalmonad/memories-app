import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Text,
} from "rebass/styled-components";
import React, { Suspense, lazy, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { AppBar } from "../../components/organisms/AppBar/AppBar.component";
import { authSelectors } from "../../store/auth/auth.slice";
import { useAppSelector } from "../../store/store.config";

const AuthPage = lazy(() => import("../../pages/AuthPage"));
const DashboardPage = lazy(() => import("../../pages/DashboardPage"));

export const App = () => {
  // useEffect(() => {

  // }, [])
  const isLoggedIn = useAppSelector(authSelectors.selectAuthToken);

  return (
    <Flex flexDirection={"column"} height={"100vh"}>
      <Router>
        <AppBar appName='memories' />
        <Route path={"/"} component={DashboardPage}>
          <Suspense fallback={<div>Loading...</div>}>
            {isLoggedIn ? <DashboardPage /> : <AuthPage />}
          </Suspense>
        </Route>
      </Router>
    </Flex>
  );
};
