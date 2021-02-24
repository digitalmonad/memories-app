import React, { Component } from "react";
import { Provider as StoreProvider, connect } from "react-redux";

import { App } from "./app/App";
import { GlobalStyle } from "./styles/GlobalStyle";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { setupServer } from "./utils/mockApiServer/server";
import { store } from "./store/store.config";
import { theme } from "./styles/theme";

if (process.env.NODE_ENV === "development") {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />

        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
