import { App } from "./app/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { setupServer } from "./utils/mockApiServer/server";
import { store } from "./store/store.config";

if (process.env.NODE_ENV === "development") {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
