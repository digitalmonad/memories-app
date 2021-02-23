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
import { useAppSelector } from "../../store/store.config";

const AuthPage = lazy(() => import("../../pages/AuthPage"));
const DashboardPage = lazy(() => import("../../pages/DashboardPage"));

export const App = () => {
  // useEffect(() => {

  // }, [])
  const isLoggedIn = useAppSelector((state) => state.auth.token);

  return (
    <Flex flexDirection={"column"}>
      <Router>
        <AppBar appName='Diary' />
        <Route path={"/"} component={DashboardPage}>
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardPage />
          </Suspense>
        </Route>
      </Router>
    </Flex>
  );
};
