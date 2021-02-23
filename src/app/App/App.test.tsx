import { store, useAppSelector } from "../../store/store.config";

import { App } from "./App.component";
import { Provider } from "react-redux";
import React from "react";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
