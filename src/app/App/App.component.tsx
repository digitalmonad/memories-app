import React, { Suspense, lazy, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { useAppSelector } from "../../store/store.config";

const AuthPage = lazy(() => import("../../pages/AuthPage"));
const DashboardPage = lazy(() => import("../../pages/DashboardPage"));

export const App = () => {
  // useEffect(() => {

  // }, [])
  const isLoggedIn = useAppSelector((state) => state.auth.token);
  console.log(isLoggedIn);
  return (
    <div className='App'>
      <Router>
        <Route path={"/"} component={DashboardPage}>
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardPage />
          </Suspense>
        </Route>
      </Router>
    </div>
  );
};
