import { App } from "./app/App";
import { GlobalStyle } from "./styles/GlobalStyle";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { setupServer } from "./utils/mockApiServer/server";
import { store } from "./store/store.config";
import { theme } from "./styles/theme";

if (process.env.NODE_ENV === "development") {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
